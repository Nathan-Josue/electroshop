"use client"

import { useState } from "react"
import { Search, ChevronDown, X, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

interface FilterOption {
    id: string
    label: string
    count?: number
}

interface FilterSection {
    id: string
    title: string
    options: FilterOption[]
    type: "checkbox" | "range" | "color"
    isOpen?: boolean
}

const filterSections: FilterSection[] = [
    {
        id: "category",
        title: "Catégorie",
        type: "checkbox",
        isOpen: true,
        options: [
            { id: "electronics", label: "Électronique", count: 245 },
            { id: "clothing", label: "Vêtements", count: 189 },
            { id: "home", label: "Maison & Jardin", count: 156 },
            { id: "sports", label: "Sport & Loisirs", count: 98 },
            { id: "books", label: "Livres", count: 67 },
        ],
    },
    {
        id: "brand",
        title: "Marque",
        type: "checkbox",
        isOpen: true,
        options: [
            { id: "apple", label: "Apple", count: 45 },
            { id: "samsung", label: "Samsung", count: 38 },
            { id: "nike", label: "Nike", count: 29 },
            { id: "adidas", label: "Adidas", count: 24 },
            { id: "sony", label: "Sony", count: 18 },
        ],
    },
    {
        id: "price",
        title: "Prix",
        type: "range",
        isOpen: true,
        options: [],
    },
    {
        id: "color",
        title: "Couleur",
        type: "color",
        isOpen: false,
        options: [
            { id: "black", label: "Noir" },
            { id: "white", label: "Blanc" },
            { id: "red", label: "Rouge" },
            { id: "blue", label: "Bleu" },
            { id: "green", label: "Vert" },
        ],
    },
]

const colorMap: Record<string, string> = {
    black: "bg-black",
    white: "bg-white border-2 border-border",
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
}

export function ProductFilterSidebar() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
    const [priceRange, setPriceRange] = useState([0, 1000])
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        category: true,
        brand: true,
        price: true,
        color: false,
    })

    const handleFilterChange = (sectionId: string, optionId: string, checked: boolean) => {
        setSelectedFilters((prev) => {
            const current = prev[sectionId] || []
            if (checked) {
                return { ...prev, [sectionId]: [...current, optionId] }
            } else {
                return { ...prev, [sectionId]: current.filter((id) => id !== optionId) }
            }
        })
    }

    const removeFilter = (sectionId: string, optionId: string) => {
        handleFilterChange(sectionId, optionId, false)
    }

    const clearAllFilters = () => {
        setSelectedFilters({})
        setPriceRange([0, 1000])
        setSearchQuery("")
    }

    const toggleSection = (sectionId: string) => {
        setOpenSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }))
    }

    const getActiveFiltersCount = () => {
        return Object.values(selectedFilters).flat().length + (priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0)
    }

    const getSelectedFilterLabels = () => {
        const labels: Array<{ sectionId: string; optionId: string; label: string }> = []

        Object.entries(selectedFilters).forEach(([sectionId, optionIds]) => {
            const section = filterSections.find((s) => s.id === sectionId)
            if (section) {
                optionIds.forEach((optionId) => {
                    const option = section.options.find((o) => o.id === optionId)
                    if (option) {
                        labels.push({ sectionId, optionId, label: option.label })
                    }
                })
            }
        })

        if (priceRange[0] > 0 || priceRange[1] < 1000) {
            labels.push({
                sectionId: "price",
                optionId: "range",
                label: `${priceRange[0]}€ - ${priceRange[1]}€`,
            })
        }

        return labels
    }

    return (
        <div className="w-full border-r border-border h-full overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        Filtrer les produits
                    </h2>
                    {getActiveFiltersCount() > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearAllFilters}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Effacer tout
                        </Button>
                    )}
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Rechercher des produits..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-background border-border"
                    />
                </div>

                {/* Active Filters */}
                {getActiveFiltersCount() > 0 && (
                    <div className="mt-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-foreground">Filtres actifs:</span>
                            <Badge variant="secondary" className="text-xs">
                                {getActiveFiltersCount()}
                            </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {getSelectedFilterLabels().map((filter) => (
                                <Badge
                                    key={`${filter.sectionId}-${filter.optionId}`}
                                    variant="outline"
                                    className="text-xs flex items-center gap-1"
                                >
                                    {filter.label}
                                    <X
                                        className="h-3 w-3 cursor-pointer hover:text-destructive"
                                        onClick={() => {
                                            if (filter.sectionId === "price") {
                                                setPriceRange([0, 1000])
                                            } else {
                                                removeFilter(filter.sectionId, filter.optionId)
                                            }
                                        }}
                                    />
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Filter Sections */}
            <div className="p-6 space-y-6">
                {filterSections.map((section) => (
                    <Collapsible key={section.id} open={openSections[section.id]} onOpenChange={() => toggleSection(section.id)}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                            <h3 className="font-medium text-foreground">{section.title}</h3>
                            <ChevronDown
                                className={cn(
                                    "h-4 w-4 text-muted-foreground transition-transform",
                                    openSections[section.id] && "rotate-180",
                                )}
                            />
                        </CollapsibleTrigger>

                        <CollapsibleContent className="mt-3 space-y-3">
                            {section.type === "checkbox" && (
                                <div className="space-y-2">
                                    {section.options.map((option) => (
                                        <div key={option.id} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`${section.id}-${option.id}`}
                                                    checked={selectedFilters[section.id]?.includes(option.id) || false}
                                                    onCheckedChange={(checked) => handleFilterChange(section.id, option.id, checked as boolean)}
                                                />
                                                <label
                                                    htmlFor={`${section.id}-${option.id}`}
                                                    className="text-sm text-foreground cursor-pointer"
                                                >
                                                    {option.label}
                                                </label>
                                            </div>
                                            {option.count && <span className="text-xs text-muted-foreground">({option.count})</span>}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.type === "range" && (
                                <div className="space-y-4">
                                    <div className="px-2">
                                        <Slider
                                            value={priceRange}
                                            onValueChange={setPriceRange}
                                            max={1000}
                                            min={0}
                                            step={10}
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span>{priceRange[0]}€</span>
                                        <span>{priceRange[1]}€</span>
                                    </div>
                                </div>
                            )}

                            {section.type === "color" && (
                                <div className="grid grid-cols-5 gap-2">
                                    {section.options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => {
                                                const isSelected = selectedFilters[section.id]?.includes(option.id)
                                                handleFilterChange(section.id, option.id, !isSelected)
                                            }}
                                            className={cn(
                                                "w-8 h-8 rounded-full border-2 transition-all",
                                                colorMap[option.id],
                                                selectedFilters[section.id]?.includes(option.id)
                                                    ? "ring-2 ring-primary ring-offset-2"
                                                    : "border-border hover:border-primary",
                                            )}
                                            title={option.label}
                                        />
                                    ))}
                                </div>
                            )}
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>

            {/* Apply Button */}
            <div className="p-6 border-t border-border">
                <Button className="w-full" size="lg">
                    Appliquer les filtres ({getActiveFiltersCount()})
                </Button>
            </div>
        </div>
    )
}
