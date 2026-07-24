Create the Login, Registration and Profile interfaces for the KK Tailors React frontend using the attached screenshots.

## Attached screenshots

* Login
* Register
* Profile – My Orders

Each screenshot is the exact visual source of truth.

This is an implementation task, not a redesign task. Reproduce the attached interfaces as closely as possible instead of creating similar alternative pages.

Complete all attached screens in one implementation pass.

## Technical requirements

Use:

* React
* JavaScript
* JSX
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
* External design templates
* Unrelated images

The generated code will later be transferred into an existing React + JavaScript + Vite project.

## Pages to create

Create these pages:

```text
/login
/register
/profile
```

The Profile page should contain only the My Orders interface shown in the attached screenshot.

Do not create:

* My Address tab
* Address-management interface
* Add Address form
* Edit Address form
* Separate Profile tabs

## Critical design requirements

Match the attached screenshots as closely as possible, including:

* Page dimensions
* Content width
* Layout
* Section order
* Background colours
* Typography
* Font sizes
* Font weights
* Line heights
* Spacing
* Padding
* Margins
* Input dimensions
* Button dimensions
* Borders
* Border radius
* Shadows
* Icons
* Alignment
* Profile layout

Do not:

* Add sections not shown in the screenshots
* Remove elements shown in the screenshots
* Change the wording unnecessarily
* Change the colour palette
* Replace the layout with a generic authentication template
* Display the screenshots themselves as page images
* Build the interface as one flattened image

Use actual React elements, form controls and CSS.

## Shared components

Create reusable components where appropriate, including:

* Authentication layout
* Form input
* Password input
* Primary button
* Secondary text link
* Order card
* Empty-state component

Do not divide very small decorative elements into unnecessary components.

## Login page

Implement the Login screenshot exactly.

Use suitable controls for:

* Email address
* Password
* Remember me, if shown
* Forgot password, if shown
* Login button
* Registration link

Requirements:

* Use `type="email"` for the email field.
* Use `type="password"` for the password field.
* Add visible or accessible labels.
* Include a show/hide password control only when shown in the screenshot.
* Preserve all wording and spacing from the screenshot.
* Prevent the form from reloading the page.
* Do not connect to a backend.
* Do not pretend that real authentication is complete.

Connect the registration text or control to the Register page.

For preview purposes only, a successful Login submission may navigate to `/profile`.

## Registration page

Implement the Register screenshot exactly.

Use the fields visible in the screenshot. When these standard fields are shown, implement:

* Full Name
* Email Address
* Phone Number
* Password
* Confirm Password

Requirements:

* Use suitable HTML input types.
* Add visible or accessible labels.
* Preserve the exact field order shown.
* Add simple frontend validation.
* Confirm Password must match Password.
* Prevent the form from reloading the page.
* Do not store sensitive information.
* Do not implement real account creation.

Connect the existing-account text or control to the Login page.

## Profile page

Create one Profile page based only on the attached My Orders screenshot.

Do not add tabs unless the screenshot itself visibly contains one My Orders tab label.

Do not add a My Address tab.

Preserve the screenshot’s:

* Profile heading
* Customer information, if shown
* My Orders heading or selected state
* Order-card layout
* Status labels
* Buttons
* Spacing
* Borders
* Typography
* Background
* Empty state, when shown

## My Orders content

Use temporary local order data.

Each order may support fields such as:

```js
{
  id: "KK-1001",
  date: "2026-07-20",
  status: "Pending",
  total: 12500,
  items: []
}
```

Display only the information shown in the screenshot, such as:

* Order number
* Order date
* Product information
* Total
* Order status
* View Details control

Use LKR price formatting:

```text
LKR 12,500.00
```

Keep prices numeric in the data.

Do not connect View Details to another page unless already required by the generated interface. It may remain non-functional.

When the screenshot shows an empty order history, reproduce the empty state rather than inventing orders.

## Header and Footer

When the screenshots contain a Header or Footer:

* Create one reusable Header.
* Create one reusable Footer.
* Reuse them across the pages.
* Keep them visually consistent with the screenshots.

When the screenshots show only the page content:

* Do not invent a Header or Footer.
* Implement only what is visible.

Do not recreate the existing KK Tailors Home page.

## Navigation

Provide simple client-side navigation between:

```text
/login
/register
/profile
```

Expected preview flow:

```text
Login → Register
Register → Login
Login → Profile
```

Do not create backend authentication.

## Logout

When the Profile screenshot contains a Logout control:

* Preserve its appearance.
* It may navigate to `/login`.
* Do not implement session clearing.

When no Logout control appears, do not add one.

## Assets

Use icons and images available in the attached screenshots.

When an asset is unavailable:

* Use a clean placeholder.
* Preserve the intended dimensions.
* Do not use unrelated external images.
* Do not display broken image icons.

## Desktop layout

The supplied screenshots are desktop designs.

Prioritize matching their desktop dimensions and layout.

Add only basic responsive protection:

* Prevent horizontal overflow.
* Allow forms and panels to fit narrower screens.
* Keep controls readable and usable.
* Stack elements only when necessary.

Do not invent separate mobile interfaces.

## Accessibility

Ensure:

* Form controls have labels.
* Buttons use suitable button types.
* Password inputs use the correct input type.
* Focus states remain visible.
* Real navigation uses links or router navigation.
* Actions use buttons.
* No control uses `href="#"`.
* Buttons and links are not improperly nested.

## Credit-saving execution

Complete Login, Register and Profile – My Orders in one pass.

Do not stop to ask questions.

Do not generate alternative versions.

Do not repeatedly rebuild completed screens.

First inspect all three screenshots, identify reusable styles and components, and then implement the complete result.

Prioritize:

1. Accurate screenshot reproduction
2. Completion of all three interfaces
3. Reusable components
4. Working page navigation
5. Frontend-only validation

Do not spend time implementing backend functionality.

## Final verification

Perform one concise verification after implementation.

Confirm:

* Login renders without crashing.
* Register renders without crashing.
* Profile renders without crashing.
* My Orders content matches the screenshot.
* Login and Register navigation works.
* Temporary Login can open Profile.
* Forms do not reload unexpectedly.
* No My Address interface was created.
* No backend or authentication service was added.
* The interfaces match their screenshots.
* No unintended horizontal overflow appears.
* No broken local assets appear.

Finish with a brief report containing:

* Pages created
* Components created
* Routes created
* Temporary data added
* Placeholder assets remaining
* Any visible differences that could not be matched
