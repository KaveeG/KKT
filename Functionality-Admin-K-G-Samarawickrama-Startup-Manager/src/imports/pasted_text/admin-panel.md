Create a complete Admin Panel frontend for the KK Tailors E-Commerce Clothing Store System.

The Admin Panel should visually match the branding of the existing KK Tailors customer website while using a separate professional administration layout.

Use the attached customer-interface screenshot only as a branding reference for:

* Colour palette
* Typography
* Logo treatment
* Button style
* Border style
* Overall elegance and simplicity

Do not copy the customer website’s navigation layout into the Admin Panel.

The Admin Panel must have its own:

* Admin Login page
* Left sidebar
* Top header
* Main content area
* Tables
* Forms
* Status labels
* Confirmation dialogs

Complete all required Admin pages in one implementation pass.

# Technical requirements

Use:

* React
* JavaScript
* JSX
* Standard CSS files
* React Router
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

The generated Admin Panel will later be transferred into an existing React + JavaScript + Vite project.

# Admin routes

Create these routes:

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

# Admin layout

Do not use the customer-side Header or Footer inside the Admin Panel.

Create a separate Admin layout containing:

## Left sidebar

Display:

* KK Tailors logo
* Dashboard
* Products
* Orders
* Tailoring Requests
* Customers
* Settings
* Log Out

Use suitable icons beside each item.

Highlight the currently selected sidebar item.

The sidebar should remain consistent across all Admin pages except Admin Login.

## Top header

Display:

* Current page title
* Optional search control when suitable
* Notification icon
* Admin profile placeholder
* Admin name placeholder

Use:

```text
Administrator
```

as the temporary Admin name.

Do not hard-code a real person’s name.

## Main content area

Use:

* Clear page headings
* Summary cards
* Tables
* Filters
* Forms
* Status badges
* Confirmation modals

Keep the layout clean, spacious and suitable for a clothing-store management system.

# Shared components

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
EmptyState
Pagination
```

Do not create unnecessary components for very small decorative elements.

# 1. Admin Login page

Route:

```text
/admin/login
```

Create a professional Admin Login page that visually matches the KK Tailors brand.

Include:

* KK Tailors logo
* Admin Login heading
* Email field
* Password field
* Show or hide password control when suitable
* Remember me option when suitable
* Login button
* Validation message area

Requirements:

* Use `type="email"`.
* Use `type="password"`.
* Add accessible labels.
* Prevent browser reload.
* Use temporary frontend validation only.
* On valid temporary Login, navigate to `/admin/dashboard`.
* Do not connect to a backend.
* Do not create real authentication.
* Do not store passwords.

Do not include customer registration links on the Admin Login page.

# 2. Admin Dashboard

Route:

```text
/admin/dashboard
```

Create a dashboard with summary cards for:

* Total Products
* Total Orders
* Pending Orders
* Completed Orders
* Low Stock Products
* Tailoring Requests

Also include sections for:

## Recent orders

Display:

* Order number
* Customer name
* Date
* Total
* Status

## Low-stock products

Display:

* Product image or placeholder
* Product name
* Category
* Remaining stock

## Upcoming tailoring appointments

Display:

* Customer name
* Appointment date
* Appointment time
* Status

Use temporary local data.

Do not add complicated charts unless they clearly improve the layout.

When a small chart is included, keep it simple and based on temporary values.

# 3. Product Management page

Route:

```text
/admin/products
```

Create a product-management table.

Display:

* Product image
* Product name
* Category
* Price
* Stock quantity
* Product status
* Edit action
* Delete action

Add controls for:

* Search by product name
* Filter by category
* Filter by stock level
* Add Product button

Use these product categories:

```text
Sarees
Tops
Frocks
Lehengas
Kurti
```

Use LKR price formatting:

```text
LKR 6,500.00
```

Possible product statuses:

```text
In Stock
Low Stock
Out of Stock
```

The Add Product button should navigate to:

```text
/admin/products/add
```

The Edit action should navigate to:

```text
/admin/products/:id/edit
```

The Delete action must open a confirmation modal.

Confirmation text:

```text
Are you sure you want to delete this product?
```

For preview purposes, deletion may update temporary frontend data only.

Do not create a separate Delete Product page.

# 4. Add Product page

Route:

```text
/admin/products/add
```

Create a structured product form containing:

* Product name
* Category
* Description
* Price
* Stock quantity
* Available sizes
* Available colours
* Product images
* Product status
* Save Product button
* Cancel button

Use suitable form controls.

Sizes may include:

```text
XS
S
M
L
XL
Free Size
```

Allow the Admin to select multiple sizes and colours.

The image area may use a temporary image-upload interface.

Do not upload files to a backend.

Use a preview placeholder only.

On successful frontend validation, display a temporary success message or navigate back to `/admin/products`.

# 5. Edit Product page

Route:

```text
/admin/products/:id/edit
```

Use the same Product Form design as the Add Product page.

Pre-fill the form with temporary product information.

Allow the Admin to update:

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

* Update Product button
* Cancel button

Do not duplicate the complete form implementation unnecessarily.

Reuse the ProductForm component.

# 6. Admin Orders page

Route:

```text
/admin/orders
```

Create an Order Management page with these tabs:

```text
All Orders
Pending Orders
Completed Orders
```

## All Orders

Display every order.

## Pending Orders

Display orders with statuses such as:

```text
Pending
Confirmed
Processing
```

## Completed Orders

Display orders with statuses such as:

```text
Delivered
Completed
```

Cancelled orders may remain under All Orders.

Display these columns:

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

* Search by order number or customer
* Filter by status
* Filter by date

Use LKR price formatting.

Use suitable status badges.

Selecting View Details should navigate to:

```text
/admin/orders/:id
```

# 7. Admin Order Details page

Route:

```text
/admin/orders/:id
```

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

* Payment method
* Payment status

For the current system, use:

```text
Payment method: Cash on Delivery
```

Suitable payment statuses:

```text
Pending
Paid
Failed
Refunded
```

## Order status

Allow the Admin to update the order status:

```text
Pending
Confirmed
Processing
Delivered
Cancelled
```

Use temporary frontend state.

Do not save changes to a backend.

# 8. Tailoring Requests page

Route:

```text
/admin/tailoring
```

Create a Tailoring Request Management page with these tabs:

```text
New Requests
Approved Requests
All Requests
```

## New Requests

Display newly submitted tailoring requests waiting for Admin review.

Primary status:

```text
Pending
```

## Approved Requests

Display requests with statuses such as:

```text
Approved
Confirmed
Scheduled
```

## All Requests

Display the complete request history, including:

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

Admin actions may include:

* Approve
* Reschedule
* Mark as Completed
* Cancel

When Reschedule is selected, open a modal containing:

* New date
* New time
* Confirm button
* Cancel button

Use temporary frontend data only.

# 9. Registered Customers page

Route:

```text
/admin/customers
```

Display registered customer accounts only.

Do not display guest website visitors.

Display:

* Customer name
* Email address
* Phone number
* Registration date
* Number of orders
* Total amount spent
* Account status

Possible account statuses:

```text
Active
Inactive
```

Add:

* Search by customer name or email
* Filter by account status

This page should be read-only for the first version.

Do not display:

* Passwords
* Password hashes
* Payment-card details
* Sensitive authentication information

Do not add Edit or Delete controls unless clearly required.

# 10. Admin Settings page

Route:

```text
/admin/settings
```

Create a simple Settings page.

Include sections for:

## Store information

* Store name
* Store email
* Store phone number
* Store address

## Delivery settings

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

## Payment method

Use:

```text
Cash on Delivery
```

Include a Save Settings button.

Use temporary frontend state.

Do not save settings to a backend.

Do not create a separate Payments page.

# Payment information

Payment information must remain inside each Order and Order Details page.

Do not create a separate payment-management page for the current version.

Do not store or request:

* Credit-card number
* CVV
* Online banking password
* Sensitive payment information

The Admin only needs to see:

* Payment method
* Payment status

# Temporary local data

Create separate local data files for:

```text
Products
Orders
Customers
Tailoring requests
Store settings
```

Use realistic temporary values.

Do not hard-code complete tables repeatedly in JSX.

Map over local data arrays.

Keep prices numeric and format them in LKR when displayed.

# Behaviour

Implement temporary frontend interactions for:

* Admin Login
* Sidebar navigation
* Search
* Filters
* Order tabs
* Tailoring tabs
* Product Add form
* Product Edit form
* Product Delete confirmation
* Order-status update
* Payment-status display
* Tailoring approval
* Tailoring rescheduling
* Tailoring completion
* Tailoring cancellation
* Settings form
* Admin Logout

The Logout button may navigate to:

```text
/admin/login
```

Do not implement real authentication or backend persistence.

# Visual design

The Admin Panel should feel connected to the KK Tailors customer website.

Use:

* Elegant neutral backgrounds
* Cream or light beige surfaces
* Dark text
* Deep maroon or brown accent colour
* Clear borders
* Soft shadows
* Moderate border radius
* Spacious layouts
* Professional tables
* Consistent buttons
* Readable typography

Do not use:

* Bright technology-dashboard colours
* Neon colours
* Excessive gradients
* Overly rounded cartoon-style controls
* A generic blue corporate dashboard appearance

Use colour-coded statuses carefully:

* Green for completed or active
* Orange or amber for pending
* Red for cancelled, deleted or out of stock
* Neutral colours for standard information

# Desktop layout

Prioritize a desktop Admin Panel around 1440px wide.

Use:

* Fixed or sticky sidebar
* Flexible main content
* Proper table alignment
* Consistent card spacing
* Equal-width dashboard cards when practical

Add basic responsive behaviour:

* Collapsible sidebar
* Horizontally scrollable tables when necessary
* Stacked dashboard cards on smaller screens
* Forms changing from two columns to one column
* No unintended page overflow

Do not create separate mobile designs.

# Accessibility

Ensure:

* Form fields have labels.
* Buttons use appropriate button types.
* Active sidebar items are identifiable.
* Tabs are keyboard accessible.
* Modal close buttons have accessible labels.
* Focus states remain visible.
* Status is not communicated using colour alone.
* Real navigation uses React Router.
* Actions use buttons.
* No control uses `href="#"`.
* Do not nest links and buttons incorrectly.

# Restrictions

Do not create:

* Backend server
* Express code
* MongoDB connection
* JWT authentication
* Real Admin authentication
* Real product uploading
* Real order updating
* Real customer account editing
* Online payment integration
* Payment gateway
* Separate Payments page
* Customer-side pages
* Customer Header
* Customer Footer

# Credit-saving execution

Complete the Admin Panel in one implementation pass.

Do not stop to ask questions.

Do not generate alternative dashboard designs.

Do not repeatedly rebuild completed pages.

First:

1. Identify shared layout and components.
2. Create the Admin Login.
3. Create the Admin layout.
4. Create the Dashboard.
5. Create Product Management.
6. Create Add and Edit Product.
7. Create Orders and Order Details.
8. Create Tailoring Requests.
9. Create Registered Customers.
10. Create Settings.
11. Test all routes and temporary interactions.

Prioritize:

1. Complete page coverage
2. Consistent Admin design
3. Reusable components
4. Correct routing
5. Working temporary interactions
6. Accurate tables and forms
7. Basic responsive protection

# Final verification

Confirm:

* `/admin/login` works.
* Temporary Login opens `/admin/dashboard`.
* Sidebar navigation works.
* Dashboard summary cards render.
* Product table renders.
* Search and filters work.
* Add Product form works.
* Edit Product form is pre-filled.
* Delete confirmation works.
* Order tabs filter correctly.
* Order Details opens correctly.
* Order status can be changed temporarily.
* Tailoring tabs filter correctly.
* Approve, Reschedule, Complete and Cancel controls work temporarily.
* Registered Customers displays registered customers only.
* Customers page does not show passwords.
* Settings page displays delivery and payment settings.
* No separate Payments page exists.
* Prices display in LKR.
* No dollar symbols appear.
* No backend or database code was added.
* No broken local assets appear.
* No unintended horizontal overflow appears.

Finish with a brief report containing:

* Pages created
* Components created
* Routes created
* Temporary data files created
* Dashboard sections
* Product-management behaviour
* Order-management behaviour
* Tailoring-management behaviour
* Customer-page behaviour
* Settings-page behaviour
* Placeholder assets remaining
* Any incomplete visual details
