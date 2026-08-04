# Shopify migration notes

## Home component mapping

| Prototype | Shopify target |
|---|---|
| `components/header` | Existing Shopify header section |
| `components/hero` | `sections/np-hero.liquid` |
| `components/benefits` | `sections/np-benefits.liquid` |
| `components/categories` | `sections/np-categories.liquid` |
| `components/brands` | `sections/np-brands.liquid` |
| `components/expert-search` | `sections/np-expert-search.liquid` |
| `components/company-story` | `sections/np-company-story.liquid` |
| `components/metrics` | `sections/np-metrics.liquid` |
| `components/testimonials` | `sections/np-testimonials.liquid` |
| `components/footer` | Existing Shopify footer section |

## Current limitations

- Static placeholder content.
- No Shopify product data.
- No collections.
- No working cart.
- No real search integration.
- No configurable theme settings.