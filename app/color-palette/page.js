"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, RefreshCw, Download, Palette, Moon, Sun } from "lucide-react";
import { Button } from "@/@shadcn/ui/components/ui/button";
import { Input } from "@/@shadcn/ui/components/ui/input";
import { Label } from "@/@shadcn/ui/components/ui/label";
import { Slider } from "@/@shadcn/ui/components/ui/slider";
import { Switch } from "@/@shadcn/ui/components/ui/switch";

export default function ColorPalettePage() {
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [baseColor, setBaseColor] = useState("#3B82F6");
  const [numColors, setNumColors] = useState(5);
  const [copiedColor, setCopiedColor] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const generateColorsFromBase = (baseColor, count, isDark) => {
    const colors = [];
    const base = hexToHSL(baseColor);

    // Generate a more sophisticated color palette
    const variations = [
      // Main color
      { h: base.h, s: base.s, l: base.l },
      // Darker shade
      {
        h: base.h,
        s: base.s,
        l: isDark ? Math.max(15, base.l - 25) : Math.max(20, base.l - 20),
      },
      // Lighter shade
      {
        h: base.h,
        s: base.s,
        l: isDark ? Math.min(85, base.l + 15) : Math.min(95, base.l + 20),
      },
      // Analogous color (30 degrees)
      {
        h: (base.h + 30) % 360,
        s: base.s,
        l: isDark ? Math.max(20, base.l - 10) : base.l,
      },
      // Analogous color (-30 degrees)
      {
        h: (base.h - 30 + 360) % 360,
        s: base.s,
        l: isDark ? Math.max(25, base.l - 15) : base.l,
      },
      // Complementary color
      {
        h: (base.h + 180) % 360,
        s: base.s,
        l: isDark ? Math.max(30, base.l - 5) : base.l,
      },
      // Split complementary 1
      {
        h: (base.h + 150) % 360,
        s: base.s,
        l: isDark ? Math.max(35, base.l - 8) : base.l,
      },
      // Split complementary 2
      {
        h: (base.h + 210) % 360,
        s: base.s,
        l: isDark ? Math.max(40, base.l - 12) : base.l,
      },
    ];

    // Adjust saturation and lightness for more professional look
    variations.forEach((color, index) => {
      // Increase saturation for more vibrant colors
      color.s = Math.min(100, color.s + (index % 2 === 0 ? 5 : -5));

      // Create more contrast between colors
      if (isDark) {
        // For dark mode, ensure colors are generally darker
        color.l = Math.max(
          15,
          Math.min(
            85,
            color.l + (index % 3 === 0 ? -15 : index % 3 === 1 ? 10 : -5)
          )
        );
      } else {
        // For light mode, ensure colors are generally lighter
        color.l = Math.max(
          20,
          Math.min(
            95,
            color.l + (index % 3 === 0 ? -10 : index % 3 === 1 ? 15 : 5)
          )
        );
      }
    });

    // Select colors based on the requested count
    const selectedVariations = variations.slice(0, count);

    // Convert to hex and add to palette
    selectedVariations.forEach((color) => {
      colors.push(hslToHex(color.h, color.s, color.l));
    });

    return colors;
  };

  const generatePalette = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newPalette = generateColorsFromBase(
        baseColor,
        numColors,
        isDarkMode
      );
      setPalettes([newPalette, ...palettes.slice(0, 4)]);
      setLoading(false);
    }, 800);
  };

  const hexToHSL = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  useEffect(() => {
    generatePalette();
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 sm:text-6xl mb-2"
          >
            Color Palette Generator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Create beautiful color palettes for your brand
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="baseColor">Base Color</Label>
                <div className="flex gap-4">
                  <Input
                    type="color"
                    id="baseColor"
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="w-20 h-10 p-1 rounded-lg cursor-pointer"
                  />
                  <Input
                    type="text"
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="numColors">Number of Colors</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    id="numColors"
                    min={3}
                    max={8}
                    step={1}
                    value={[numColors]}
                    onValueChange={([value]) => setNumColors(value)}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-8 text-center">
                    {numColors}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="darkMode">Color Mode</Label>
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-gray-500" />
                  <Switch
                    id="darkMode"
                    checked={isDarkMode}
                    onCheckedChange={setIsDarkMode}
                  />
                  <Moon className="h-4 w-4 text-gray-500" />
                </div>
              </div>

              <Button
                onClick={generatePalette}
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Generating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Generate New Palette
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {palettes.map((palette, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="grid grid-cols-5 h-32">
                {palette.map((color, colorIndex) => (
                  <motion.div
                    key={colorIndex}
                    className="relative group cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => copyToClipboard(color)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {copiedColor === color && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm font-medium">
                        Copied!
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Palette {index + 1}</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(palette.join(", "))}
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Copy All
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {palette.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="text-xs font-mono text-gray-600 truncate"
                    >
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
