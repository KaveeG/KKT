Create a complete Admin Panel frontend for the KK Tailors E-Commerce Clothing Store System.

I do not have any Admin Panel screenshots, wireframes or existing Admin UI designs.

Design the Admin Panel from scratch by using the attached completed KK Tailors customer-side interfaces as the visual and branding reference.

The customer-side screenshots are not layouts to copy directly. Use them only to understand the existing brand style.

The Admin Panel should feel like part of the same KK Tailors system while having a separate professional dashboard layout suitable for administrators.

## Design direction from the customer interface

Study the attached customer-side screenshots and reuse their general visual identity, including:

* KK Tailors logo treatment
* Colour palette
* Cream and neutral backgrounds
* Dark text
* Maroon, brown or deep red accents
* Typography style
* Button appearance
* Border style
* Border radius
* Spacing approach
* Soft shadows
* Elegant clothing-store appearance
* Clean and minimal presentation

Do not copy the customer navigation bar, product cards, shopping layout or customer footer into the Admin Panel.

Create a new Admin experience using:

* Left sidebar
* Admin top header
* Dashboard cards
* Management tables
* Filters
* Forms
* Status badges
* Confirmation modals

The final Admin Panel should visually match the customer website brand without looking like a customer shopping page.

## Technical requirements

Use:

* React
* JavaScript
* JSX
* React Router
* Standard CSS files
* Reusable React components
* Temporary local data

Do not use:

* TypeScript
* Tailwind CSS
* Bootstrap
* External UI frameworks
* Backend APIs
* MongoDB
* Authentication services
* Payment gateways
* External dashboard templates
* Prebuilt Admin themes

The generated project will later be transferred into an existing React + JavaScript + Vite project.

## Admin routes

Create:

```text
/admin/login
/admin/dashboard
/admin/products
/admin/products/add
/admin/products/:id/edit
/admin/orders
/admin/orders/:id
/admin/tailoring
/admin/customers
/admin/settings
```

## General Admin layout

Create a separate Admin layout.

Do not use the customer-side Header or Footer.

The Admin layout should include:

### Left sidebar

Display:

* KK Tailors logo
* Dashboard
* Products
* Orders
* Tailoring Requests
* Customers
* Settings
* Log Out

Requirements:

* Use suitable icons.
* Highlight the active page.
* Keep the sidebar visible on desktop.
* Allow it to collapse on smaller screens.
* Do not make it excessively wide.
* Use the customer-side colours and logo style.

### Top header

Display:

* Current page title
* Search control when useful
* Notification icon
* Admin profile area
* Admin name placeholder

Use:

```text
Administrator
```

Do not use a real person’s name.

### Main content

Use:

* Spacious page layouts
* Clear headings
* Summary cards
* Search and filter controls
* Tables
* Forms
* Status indicators
* Empty states
* Confirmation dialogs

## Shared components

Create reusable components where appropriate:

```text
AdminSidebar
AdminHeader
AdminLayout
AdminStatCard
AdminTable
ProductForm
OrderTable
TailoringTable
StatusBadge
SearchInput
FilterSelect
DeleteConfirmationModal
RescheduleModal
EmptyState
Pagination
```

Avoid creating unnecessary components for very small decorative elements.

# 1. Admin Login

Route:

```text
/admin/login
```

Design a professional Admin Login page from scratch using the KK Tailors customer-side branding.

Include:

* KK Tailors logo
* Admin Login heading
* Short supporting text
* Email field
* Password field
* Password visibility control
* Remember me option
* Login button
* Validation area

Requirements:

* Use `type="email"`.
* Use `type="password"`.
* Add accessible labels.
* Prevent page reload.
* Use temporary frontend validation.
* Navigate to `/admin/dashboard` after valid temporary submission.
* Do not create real authentication.
* Do not store passwords.
* Do not include customer registration links.

The page should feel secure and professional while still matching the elegant KK Tailors identity.

# 2. Admin Dashboard

Route:

```text
/admin/dashboard
```

Design a useful management dashboard.

Create summary cards for:

* Total Products
* Total Orders
* Pending Orders
* Completed Orders
* Low Stock Products
* Tailoring Requests

Also include:

## Recent Orders

Display:

* Order number
* Customer name
* Order date
* Total
* Status

## Low Stock Products

Display:

* Product image or placeholder
* Product name
* Category
* Available stock

## Upcoming Tailoring Appointments

Display:

* Customer name
* Appointment date
* Appointment time
* Status

Use realistic temporary data.

A small simple chart may be used only when it improves the dashboard. Do not make charts the main focus.

# 3. Product Management

Route:

```text
/admin/products
```

Design a product-management page.

Display a table with:

* Product image
* Product name
* Category
* Price
* Stock quantity
* Product status
* Edit action
* Delete action

Add:

* Search by product name
* Category filter
* Stock filter
* Add Product button

Use categories:

```text
Sarees
Tops
Frocks
Lehengas
Kurti
```

Use LKR formatting:

```text
LKR 6,500.00
```

Possible stock statuses:

```text
In Stock
Low Stock
Out of Stock
```

Navigation:

```text
Add Product → /admin/products/add
Edit Product → /admin/products/:id/edit
```

Delete should open a confirmation modal:

```text
Are you sure you want to delete this product?
```

For the generated preview, deletion may update temporary frontend data only.

Do not create a separate Delete Product page.

# 4. Add Product

Route:

```text
/admin/products/add
```

Design a clean Add Product form.

Fields:

* Product name
* Category
* Description
* Price
* Stock quantity
* Available sizes
* Available colours
* Product images
* Product status

Sizes may include:

```text
XS
S
M
L
XL
Free Size
```

Allow multiple size and colour selections.

Include:

* Save Product
* Cancel

The image-upload area should be a frontend preview only.

Do not upload to a backend.

Add basic frontend validation.

After temporary success, show a message or navigate back to `/admin/products`.

# 5. Edit Product

Route:

```text
/admin/products/:id/edit
```

Reuse the Add Product form design.

Pre-fill the form with temporary product data.

Allow updates to:

* Product name
* Category
* Description
* Price
* Stock quantity
* Sizes
* Colours
* Product images
* Product status

Include:

* Update Product
* Cancel

Reuse one shared `ProductForm` component instead of duplicating the full form.

# 6. Orders

Route:

```text
/admin/orders
```

Design an Order Management page with these tabs:

```text
All Orders
Pending Orders
Completed Orders
```

## All Orders

Display every order.

## Pending Orders

Include orders with statuses such as:

```text
Pending
Confirmed
Processing
```

## Completed Orders

Include:

```text
Delivered
Completed
```

Cancelled orders may remain in All Orders.

Display columns:

* Order number
* Customer name
* Order date
* Number of products
* Total amount
* Payment method
* Payment status
* Order status
* View Details

Add:

* Search by order number or customer name
* Status filter
* Date filter

Use LKR prices.

View Details should open:

```text
/admin/orders/:id
```

# 7. Order Details

Route:

```text
/admin/orders/:id
```

Design a clear order-details page.

Display:

## Customer information

* Customer name
* Email address
* Phone number

## Delivery information

* Address
* City
* Postal code

## Ordered products

* Product image or placeholder
* Product name
* Selected size
* Selected colour
* Quantity
* Unit price
* Line total

## Order summary

* Subtotal
* Delivery charge
* Total

## Payment information

Display:

```text
Payment method: Cash on Delivery
```

Possible payment statuses:

```text
Pending
Paid
Failed
Refunded
```

## Order status

Allow temporary frontend updates using:

```text
Pending
Confirmed
Processing
Delivered
Cancelled
```

Do not save changes to a backend.

# 8. Tailoring Requests

Route:

```text
/admin/tailoring
```

Design a Tailoring Request Management page with:

```text
New Requests
Approved Requests
All Requests
```

## New Requests

Display newly submitted requests.

Primary status:

```text
Pending
```

## Approved Requests

Include:

```text
Approved
Confirmed
Scheduled
```

## All Requests

Include the full history:

```text
Pending
Approved
Rescheduled
Completed
Cancelled
```

Display:

* Request number
* Customer name
* Phone number
* Email address
* Preferred date
* Preferred time
* Customer note
* Submitted date
* Appointment status
* Actions

Actions:

* Approve
* Reschedule
* Mark as Completed
* Cancel

Reschedule should open a modal containing:

* New date
* New time
* Confirm
* Cancel

Use temporary frontend data.

# 9. Registered Customers

Route:

```text
/admin/customers
```

Display registered customer accounts only.

Do not display guests who only browse products.

Display:

* Customer name
* Email address
* Phone number
* Registration date
* Number of orders
* Total amount spent
* Account status

Possible statuses:

```text
Active
Inactive
```

Add:

* Search by customer name or email
* Account-status filter

Keep this page read-only for the first version.

Do not display:

* Passwords
* Password hashes
* Payment-card details
* Authentication secrets

Do not add unnecessary Edit or Delete controls.

# 10. Settings

Route:

```text
/admin/settings
```

Design a simple Settings page.

Include:

## Store Information

* Store name
* Store email
* Store phone number
* Store address

## Delivery Settings

* Standard delivery charge
* Free-delivery threshold

Use temporary values:

```text
Standard delivery charge: LKR 350
Free delivery threshold: Above LKR 5,000
```

## Currency

Use:

```text
LKR
```

## Payment Method

Use:

```text
Cash on Delivery
```

Include a Save Settings button.

Use temporary frontend state.

Do not create a separate Payments page.

## Payment handling

Payment information should remain inside Orders and Order Details.

The Admin only needs to see:

* Payment method
* Payment status

Do not request or store:

* Card numbers
* CVV
* Banking passwords
* Sensitive payment information

# Temporary data

Create separate temporary data files for:

```text
Products
Orders
Customers
Tailoring requests
Store settings
Dashboard statistics
```

Requirements:

* Use realistic data.
* Keep prices numeric.
* Format prices when displayed.
* Do not hard-code repeated table rows in JSX.
* Render data using `.map()`.
* Use unique IDs.
* Use placeholders for missing product images.
* Do not display broken images.

# Temporary frontend behaviour

Implement:

* Admin Login
* Sidebar navigation
* Logout
* Search
* Filters
* Tabs
* Add Product validation
* Edit Product form
* Delete confirmation
* Order-status updates
* Tailoring approval
* Tailoring rescheduling
* Tailoring completion
* Tailoring cancellation
* Settings form updates

Logout may navigate to:

```text
/admin/login
```

Do not implement backend persistence.

# Visual design rules

Because there are no Admin screenshots, create a polished original Admin design.

It must still match the customer panel brand.

Use:

* Cream or light beige backgrounds
* White or warm-neutral cards
* Dark brown or charcoal text
* Deep maroon or brown primary buttons
* Subtle grey and beige borders
* Soft shadows
* Moderate border radius
* Clear table headers
* Spacious form layouts
* Consistent button sizes
* Elegant typography
* Balanced white space

Do not use:

* Generic bright blue dashboard styling
* Neon colours
* Large gradients
* Glassmorphism
* Excessive animations
* Overly rounded cartoon controls
* Unrelated technology-dashboard themes
* Dark-mode styling unless it appears in the customer reference
* A copied external Admin template

Use status colours carefully:

* Green: completed, delivered, active
* Amber: pending, processing, low stock
* Red: cancelled, failed, out of stock
* Neutral grey: general information

Status text must remain visible and not rely on colour alone.

# Desktop and responsive behaviour

Prioritize a desktop width around 1440px.

Use:

* Fixed or sticky sidebar
* Flexible main content area
* Consistent content width
* Equal dashboard-card spacing
* Proper table alignment
* Two-column forms when suitable

For smaller screens:

* Collapse the sidebar
* Stack dashboard cards
* Allow tables to scroll horizontally
* Change forms to one column
* Keep buttons and inputs usable
* Prevent page overflow

Do not design separate mobile screens.

# Accessibility

Ensure:

* Inputs have labels.
* Buttons use appropriate types.
* Active sidebar items are identifiable.
* Tabs are keyboard accessible.
* Modal close buttons have accessible labels.
* Focus styles remain visible.
* Status is not represented by colour alone.
* Navigation uses React Router.
* Actions use buttons.
* No element uses `href="#"`.
* Links and buttons are not improperly nested.

# Restrictions

Do not create:

* Backend server
* Express code
* MongoDB
* JWT authentication
* Real Admin accounts
* Real product uploading
* Real order persistence
* Real settings persistence
* Online payments
* Payment gateway
* Separate Payments page
* Customer-side pages
* Customer Header
* Customer Footer
* Another version of the Home page

# Credit-saving execution

Complete the full Admin Panel in one implementation pass.

Do not stop to ask questions.

Do not generate multiple visual alternatives.

Do not repeatedly rebuild completed pages.

Use this order:

1. Analyse the attached customer-side branding.
2. Define the Admin visual system.
3. Create Admin Login.
4. Create the shared Admin layout.
5. Create Dashboard.
6. Create Products.
7. Create Add and Edit Product.
8. Create Orders and Order Details.
9. Create Tailoring Requests.
10. Create Registered Customers.
11. Create Settings.
12. Test routes and temporary interactions.

Prioritize:

1. Complete page coverage
2. Visual consistency with the customer panel
3. Professional Admin usability
4. Reusable components
5. Correct routing
6. Working temporary interactions
7. Responsive protection

# Final verification

Confirm:

* The Admin design was created from scratch.
* The customer screenshots were used only as a branding reference.
* The Admin does not copy the customer navigation layout.
* `/admin/login` works.
* Temporary Login opens `/admin/dashboard`.
* Sidebar navigation works.
* Dashboard sections render.
* Product search and filters work.
* Add Product works temporarily.
* Edit Product is pre-filled.
* Delete confirmation works.
* Order tabs filter correctly.
* Order Details opens correctly.
* Order status can be changed temporarily.
* Tailoring tabs work.
* Tailoring actions work temporarily.
* Customers shows registered customers only.
* No passwords are displayed.
* Settings displays delivery and Cash on Delivery information.
* No separate Payments page exists.
* Prices display in LKR.
* No dollar symbols appear.
* No backend or database code was added.
* No broken assets appear.
* No unintended horizontal overflow appears.

Finish with a brief report containing:

* Visual design approach used
* Pages created
* Components created
* Routes created
* Temporary data files
* Dashboard sections
* Product-management behaviour
* Order-management behaviour
* Tailoring-management behaviour
* Customer-page behaviour
* Settings-page behaviour
* Remaining placeholders
* Any incomplete visual details
