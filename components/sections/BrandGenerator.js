"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COLOR_THEMES, FONT_MAP, ICON_MAP } from "@/lib/constants";
import { Button } from "@/@shadcn/ui/components/ui/button";
import { RefreshCw, Copy, ExternalLink, Download } from "lucide-react";
import { Select } from "@/@shadcn/ui/components/ui/select";
import Image from "next/image";

export default function BrandGenerator() {
  const [form, setForm] = useState({
    style: "",
    category: "",
    audience: "",
  });

  const [branding, setBranding] = useState(null);
  const [loading, setLoading] = useState(false);
  const [colorLoading, setColorLoading] = useState(false);
  const [copiedColor, setCopiedColor] = useState(null);

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Generate branding based on selections
  const generateBranding = () => {
    setLoading(true);

    setTimeout(() => {
      const font = FONT_MAP[form.style]?.primary || FONT_MAP.default.primary;
      const icons = ICON_MAP[form.category]?.name || ICON_MAP.default.name;

      // Get a random color theme variant for the selected style
      const colorThemeVariants =
        COLOR_THEMES[form.style] || COLOR_THEMES.Minimalist;
      const randomColorTheme =
        colorThemeVariants[
          Math.floor(Math.random() * colorThemeVariants.length)
        ];

      setBranding({
        font,
        icons,
        colors: randomColorTheme,
      });

      setLoading(false);
    }, 800); // Adding a small delay to simulate API call
  };

  // Regenerate just the colors
  const regenerateColors = () => {
    setColorLoading(true);

    setTimeout(() => {
      const colorThemeVariants =
        COLOR_THEMES[form.style] || COLOR_THEMES.Minimalist;
      const randomColorTheme =
        colorThemeVariants[
          Math.floor(Math.random() * colorThemeVariants.length)
        ];

      setBranding((prev) => ({
        ...prev,
        colors: randomColorTheme,
      }));

      setColorLoading(false);
    }, 600);
  };

  const copyColorToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const getFontLink = () => {
    if (!form.style || !branding) return FONT_MAP.default.url;
    return FONT_MAP[form.style]?.url || FONT_MAP.default.url;
  };

  const getIconLink = () => {
    if (!form.category || !branding) return ICON_MAP.default.url;
    return ICON_MAP[form.category]?.url || ICON_MAP.default.url;
  };

  const isFormComplete = Object.values(form).every((value) => value !== "");

  return (
    <section className="relative  px-4 md:px-8 mb-20">
      <div className="max-w-5xl mx-auto relative">
        <Image
          src={"/gradient-tool.png"}
          height={1000}
          width={1000}
          alt="gradient"
          className="absolute top-[-200px] -z-10"
          style={{ opacity: 0.5 }}
        />
        <div className="flex flex-col md:flex-row gap-3 relative">
          {/* Left Card - Form */}
          <motion.div
            className="md:w-2/5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="font-medium text-lg mb-6">Brand Parameters</h3>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Style
                </label>
                <Select
                  value={form.style}
                  onValueChange={(value) => handleChange("style", value)}
                  placeholder="Choose a style"
                  options={[
                    { label: "Playful", value: "Playful" },
                    { label: "Minimalist", value: "Minimalist" },
                    { label: "Elegant", value: "Elegant" },
                    { label: "Nature", value: "Nature" },
                    { label: "Futuristic", value: "Futuristic" },
                  ]}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Category
                </label>
                <Select
                  value={form.category}
                  onValueChange={(value) => handleChange("category", value)}
                  placeholder="Choose a category"
                  options={[
                    { label: "Fintech", value: "Fintech" },
                    { label: "Ecommerce", value: "Ecommerce" },
                    { label: "Health", value: "Health" },
                    { label: "Kids", value: "Kids" },
                    { label: "AI Tool", value: "AI Tool" },
                  ]}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Audience
                </label>
                <Select
                  value={form.audience}
                  onValueChange={(value) => handleChange("audience", value)}
                  placeholder="Choose your audience"
                  options={[
                    { label: "Teenagers", value: "Teenagers" },
                    { label: "Adults", value: "Adults" },
                    { label: "Professionals", value: "Professionals" },
                    { label: "Designers", value: "Designers" },
                  ]}
                />
              </div>

              <Button
                variant="default"
                className="w-full !bg-black !text-white hover:!bg-black/90 cursor-pointer"
                disabled={!isFormComplete || loading}
                onClick={generateBranding}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Generating...
                  </div>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                    Generate Branding
                  </span>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Right Card - Brand Palette */}
          <motion.div
            className="md:w-4/5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-medium text-lg mb-6">Brand Palette</h3>

            {!branding ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <p className="text-gray-500 text-sm">
                  Configure your brand parameters and generate a palette
                </p>
              </div>
            ) : (
              <div className="space-y-6 ">
                {/* Typography & Icons Section */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-3 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs uppercase tracking-wider text-gray-500">
                        Typography
                      </span>
                      <a
                        href={getFontLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs flex items-center text-black hover:text-gray-800"
                      >
                        <span className="mr-1">Find font</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <p className="font-medium">{branding.font}</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs uppercase tracking-wider text-gray-500">
                        Icon Style
                      </span>
                      <a
                        href={getIconLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs flex items-center text-black hover:text-gray-800"
                      >
                        <span className="mr-1">Browse icons</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <p className="font-medium">{branding.icons}</p>
                  </div>
                </div>

                {/* Color Palette */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs uppercase tracking-wider text-gray-500">
                      Color Palette
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={regenerateColors}
                      disabled={colorLoading}
                    >
                      {colorLoading ? (
                        <div className="h-4 w-4 animate-spin border-2 border-t-transparent border-current rounded-full" />
                      ) : (
                        <>
                          <RefreshCw className="h-3 w-3 mr-1" />
                          <span>Refresh Colors</span>
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {branding &&
                      branding.colors &&
                      Object.entries(branding.colors).map(([key, value]) => (
                        <motion.div
                          key={key}
                          className="rounded-lg overflow-hidden shadow-sm"
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div
                            className="h-16 relative cursor-pointer"
                            style={{ backgroundColor: value }}
                            onClick={() => copyColorToClipboard(value)}
                          >
                            {copiedColor === value && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-sm font-medium">
                                Copied!
                              </div>
                            )}
                          </div>
                          <div className="p-2 bg-gray-50">
                            <p className="text-xs font-medium capitalize">
                              {key}
                            </p>
                            <p className="text-xs text-gray-500 uppercase">
                              {value}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* Preview Section */}
                <div className="mt-6">
                  <span className="text-xs uppercase tracking-wider text-gray-500 block mb-3">
                    Preview
                  </span>
                  <div className="p-4 bg-white border border-gray-100 rounded-lg">
                    <div className="mb-4">
                      <h4
                        className="text-base font-bold mb-1"
                        style={{ color: branding.colors.primary }}
                      >
                        Header Example
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: branding.colors.text }}
                      >
                        This is how your body text would look with these colors.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        className="px-4 py-2 rounded-lg font-medium text-white text-sm"
                        style={{ backgroundColor: branding.colors.primary }}
                      >
                        Primary Button
                      </button>
                      <button
                        className="px-4 py-2 rounded-lg font-medium text-sm border"
                        style={{
                          color: branding.colors.primary,
                          borderColor: branding.colors.primary,
                        }}
                      >
                        Secondary Button
                      </button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-2 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const palette = Object.entries(branding.colors)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join("\n");
                      navigator.clipboard.writeText(palette);
                    }}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    <span>Copy All</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    <span>Export</span>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
