import svgPaths from "./svg-a9wp40d2i1";
import imgImage27 from "./b180ac54113cebf28684a3119ca0a4457cec4633.png";
import imgPlaceholderImage from "./218e6913b615945832a6d17bca2f30717844024d.png";

function Group() {
  return (
    <div className="absolute left-[2.65px] size-[41.512px] top-0">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.5122 41.5122">
        <g id="Group 16">
          <circle cx="20.7561" cy="20.7561" fill="var(--fill-0, white)" id="Ellipse 312" r="20.1921" stroke="var(--stroke-0, #D10743)" strokeWidth="1.12805" />
          <circle cx="20.756" cy="20.7573" fill="var(--fill-0, white)" id="Ellipse 313" r="18.9461" stroke="var(--stroke-0, #D10743)" strokeWidth="0.479648" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[2.65px] top-0">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[1.71px]">
      <div className="absolute flex h-[42.28px] items-center justify-center left-0 top-[1.71px] w-[59.337px]">
        <div className="flex-none rotate-[10.83deg] scale-y-98 skew-x-[-11.24deg]">
          <div className="h-[36.184px] relative w-[46.57px]" data-name="image 27">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage27} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gugi:Regular',sans-serif] h-[7.941px] justify-center leading-[0] left-[23.47px] not-italic text-[#d10743] text-[5.151px] text-center top-[19.42px] tracking-[0.2575px] w-[27.042px]">
        <p className="leading-[normal] mb-0">KK</p>
        <p className="leading-[normal]">TAILORS</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group2 />
      <Group1 />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[43.997px] relative shrink-0 w-[59.337px]" data-name="1">
      <Group3 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Down">
          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavLinkDropdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Nav Link Dropdown">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dresses
      </p>
      <ChevronDown />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0" data-name="Column">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Home
      </p>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Shop
      </p>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        New arrivals
      </p>
      <NavLinkDropdown />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Content">
      <Component />
      <Column />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center px-[20px] py-[8px] relative shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Login
        </p>
      </div>
      <div className="bg-black content-stretch flex items-center justify-center px-[20px] py-[8px] relative shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Cart
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1312px]" data-name="Container">
      <Content />
      <Actions />
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Loved
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Sarees
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        The pieces you return for. Season after season.
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Title">
      <TaglineWrapper />
      <Content1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wool blazer
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Charcoal
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $450
      </p>
    </div>
  );
}

function Product() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Product">
      <div className="h-[364.8px] relative rounded-[15px] shrink-0 w-[296px]" data-name="Placeholder Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
          <div className="absolute bg-[rgba(247,247,249,0.6)] inset-0 rounded-[15px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[15px]">
            <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgPlaceholderImage} />
          </div>
        </div>
      </div>
      <Content3 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wool blazer
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Charcoal
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header1 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $450
      </p>
    </div>
  );
}

function Product1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Product">
      <div className="h-[364.8px] relative rounded-[15px] shrink-0 w-[296px]" data-name="Placeholder Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
          <div className="absolute bg-[rgba(247,247,249,0.6)] inset-0 rounded-[15px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[15px]">
            <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgPlaceholderImage} />
          </div>
        </div>
      </div>
      <Content4 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Linen dress
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ecru
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header2 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $320
      </p>
    </div>
  );
}

function Product2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Product">
      <div className="h-[364.8px] relative rounded-[15px] shrink-0 w-[296px]" data-name="Placeholder Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
          <div className="absolute bg-[rgba(247,247,249,0.6)] inset-0 rounded-[15px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[15px]">
            <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgPlaceholderImage} />
          </div>
        </div>
      </div>
      <Content5 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cashmere crew
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Camel
      </p>
    </div>
  );
}

function Content6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header3 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $275
      </p>
    </div>
  );
}

function Product3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Product">
      <div className="h-[364.8px] relative rounded-[15px] shrink-0 w-[296px]" data-name="Placeholder Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
          <div className="absolute bg-[rgba(247,247,249,0.6)] inset-0 rounded-[15px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[15px]">
            <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgPlaceholderImage} />
          </div>
        </div>
      </div>
      <Content6 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Product />
      <Product1 />
      <Product2 />
      <Product3 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wool blazer
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Charcoal
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header4 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $450
      </p>
    </div>
  );
}

function Product4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Product">
      <div className="h-[364.8px] relative rounded-[15px] shrink-0 w-[296px]" data-name="Placeholder Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
          <div className="absolute bg-[rgba(247,247,249,0.6)] inset-0 rounded-[15px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[15px]">
            <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgPlaceholderImage} />
          </div>
        </div>
      </div>
      <Content7 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wool blazer
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Charcoal
      </p>
    </div>
  );
}

function Content8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header5 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $450
      </p>
    </div>
  );
}

function Product5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Product">
      <div className="h-[364.8px] relative rounded-[15px] shrink-0 w-[296px]" data-name="Placeholder Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
          <div className="absolute bg-[rgba(247,247,249,0.6)] inset-0 rounded-[15px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[15px]">
            <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgPlaceholderImage} />
          </div>
        </div>
      </div>
      <Content8 />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Linen dress
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ecru
      </p>
    </div>
  );
}

function Content9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header6 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $320
      </p>
    </div>
  );
}

function Product6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Product">
      <div className="h-[364.8px] relative rounded-[15px] shrink-0 w-[296px]" data-name="Placeholder Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
          <div className="absolute bg-[rgba(247,247,249,0.6)] inset-0 rounded-[15px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[15px]">
            <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgPlaceholderImage} />
          </div>
        </div>
      </div>
      <Content9 />
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cashmere crew
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Camel
      </p>
    </div>
  );
}

function Content10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header7 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $275
      </p>
    </div>
  );
}

function Product7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Product">
      <div className="h-[364.8px] relative rounded-[15px] shrink-0 w-[296px]" data-name="Placeholder Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
          <div className="absolute bg-[rgba(247,247,249,0.6)] inset-0 rounded-[15px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[15px]">
            <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgPlaceholderImage} />
          </div>
        </div>
      </div>
      <Content10 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Product4 />
      <Product5 />
      <Product6 />
      <Product7 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <Row1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Title />
      <Content2 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          View all
        </p>
      </div>
    </div>
  );
}

export default function DesktopProducts() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[80px] items-center pb-[112px] pt-[50px] px-[64px] relative size-full" data-name="Desktop – Products">
      <Container />
      <Container1 />
      <Actions1 />
    </div>
  );
}