Create the Products page and Product Details page for the KK Tailors React frontend using the two attached Figma frames.

Attached designs
Desktop – Products
Desktop – Product Details

These attached Figma frames are the exact visual source of truth.

This is an implementation task, not a redesign task. Reproduce the supplied designs themselves rather than generating a similar clothing e-commerce layout.

Complete both pages fully in this single task. Do not stop after creating a basic structure or partial implementation.

Technical requirements

Use:

React
JavaScript
JSX
Standard CSS files

Do not use:

TypeScript
Tailwind CSS
Bootstrap
A UI framework
A backend
MongoDB
Authentication
External website templates
Unrelated placeholder images

Use reusable React components and temporary local product data.

Existing project context

The main KK Tailors project already has a completed Home page with:

Cream-coloured Header
Enlarged KK Tailors logo
Home, Shop, New arrivals and Dresses navigation
Profile and Cart buttons
Featured section
Best Sellers section
Category section
Custom Tailoring section
Follow Us section
Footer
LKR price formatting

Do not recreate or redesign the Home page.

The generated Products and Product Details pages will later be transferred into the existing React project in VS Code.

Shared design requirements

Use the attached frames to reproduce exactly:

Header design
KK Tailors logo
Navigation layout
Profile button
Cart button
Footer design
Colours
Typography
Font sizes
Spacing
Margins
Padding
Content width
Borders
Border radiuses
Button styles
Image dimensions
Alignment
Background colours

Reuse shared components between the two pages, including:

Header
Footer
ProductCard
Buttons
Product image placeholder
Price formatter

Do not create separate duplicated Header or Footer implementations for each page.

Products page

Implement the complete attached Desktop – Products frame.

Preserve exactly what is visible in the attached frame, including:

Page heading
Introductory text
Search control, when shown
Category controls
Filter controls
Sorting control
Product count
Product grid
Product-card dimensions
Number of columns
Product-card spacing
Product names
Product descriptions or colours
Product prices
Product image areas
Buttons or links
Header
Footer

Do not invent filters, categories, controls, labels or sections that are not shown in the Products frame.

Do not remove anything visible in the attached Products frame.

Temporary product data

Create reusable local product data containing fields such as:

{
  id: 1,
  name: "Product name",
  description: "Product description",
  category: "Sarees",
  price: 6250,
  image: ""
}

Keep prices as numbers.

Display prices using this format:

LKR 6,250.00

Use a reusable JavaScript price formatter.

When a product does not have an image, display the same clean product-image placeholder style used in the design.

Do not use the repeated purple dress image.

Render product cards by mapping over product data. Do not manually repeat product-card JSX.

Product Details page

Implement the complete attached Desktop – Product Details frame.

Preserve exactly what is visible in the attached frame, including:

Product image area
Product thumbnails, when shown
Product name
Product category
Product description
LKR price
Size controls
Colour controls
Quantity selector
Stock information
Add to Cart button
Additional product information
Related products, when shown
Header
Footer
Spacing
Typography
Alignment
Borders and buttons

Do not invent options or content that are not visible in the Product Details frame.

Use the selected product’s data to populate the Product Details page.

Display the price using the same reusable LKR formatter.

When no product image exists, display a properly sized placeholder instead of a broken image.

Page navigation

Connect the pages so that:

Selecting a product card on the Products page opens the Product Details page.
The Product Details page displays the selected product.
A Back to Products control returns to the Products page when such a control is shown in the attached design.

Use the simplest reliable React navigation structure available in the generated project.

Do not add backend calls.

Do not implement Profile, Cart or authentication functionality.

Header behaviour

Keep the Header labels:

Home
Shop
New arrivals
Dresses
Profile
Cart

Do not create additional pages for these controls.

Profile and Cart can remain non-functional.

If Home or other Header controls require destinations during the generated preview, keep their implementation minimal and do not generate a replacement Home page.

The Dresses control may visually preserve its dropdown icon, but do not spend time creating category pages.

Desktop-only design

The attached designs are desktop-only.

Prioritize accurate implementation at the exact desktop width used by the Figma frames, approximately 1440px when applicable.

Add only basic responsive protection:

Prevent horizontal overflow.
Allow the product grid to reduce columns on narrower screens.
Keep images proportional.
Allow controls to wrap when necessary.
Keep text readable.

Do not invent a separate mobile design.

Assets

Use the images, icons and logo assets contained in the attached Figma designs.

Do not use the full Figma frame as one screenshot.

Build the pages using real React elements, components and CSS.

Do not replace supplied design assets with unrelated external images.

When the Figma frame contains an intentional placeholder, preserve it as a placeholder.

Credit-saving execution requirement

Complete both attached pages in one implementation pass.

Do not stop to ask questions.

Do not generate several alternative versions.

Do not redesign sections.

Do not spend time implementing features that are not visible in the attached frames.

Do not repeatedly rebuild working sections.

First inspect both attached frames, identify their shared components, and then implement the complete two-page result.

Final checks

After implementation, perform one concise final verification.

Confirm:

Products page renders without crashing.
Product Details page renders without crashing.
Both pages match their attached desktop frames.
The Header and Footer are consistent across both pages.
Product cards open the correct Product Details content.
Prices use LKR formatting.
Missing images show placeholders.
No broken local asset paths exist.
No unintended horizontal scrolling exists at 1440px.
The implementation does not include a replacement Home page.

Do not provide a long testing report unless an actual error is found.

Finish with a brief list of:

Components created
Pages created
Assets used
Any placeholders remaining
Any visible design differences that could not be matched