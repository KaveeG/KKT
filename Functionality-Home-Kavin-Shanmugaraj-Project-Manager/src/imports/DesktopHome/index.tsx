import svgPaths from "./svg-3voxwvntjk";
import imgImage27 from "./b180ac54113cebf28684a3119ca0a4457cec4633.png";
import imgPlaceholderImage from "./218e6913b615945832a6d17bca2f30717844024d.png";
import imgPlaceholderImage1 from "./b7b4e314cc3eb923b7fa8aac8183d1866fe76120.png";
import imgCta28 from "./d50ffb0afa333613e155822dc6b3dfe63f150a74.png";
import imgPlaceholderImage2 from "./4bb9c4e9912ce93beab5418d5123a169c010d768.png";

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

function Group3() {
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

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group3 />
      <Group1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[43.997px] relative shrink-0 w-[59.337px]" data-name="1">
      <Group6 />
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
      <Component1 />
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Content />
      <Actions />
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Curated
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Featured
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        The pieces we are wearing now. Essential shapes, refined.
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
      <Product4 />
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

function Product8() {
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
      <Product5 />
      <Product6 />
      <Product7 />
      <Product8 />
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

function Product3() {
  return (
    <div className="bg-[#f1eee9] relative shrink-0 w-full" data-name="Product / 3 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[145px] items-center pb-[112px] pt-[50px] px-[64px] relative size-full">
          <Container />
          <Container1 />
          <Actions1 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Loved
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Best
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        The pieces you return for. Season after season.
      </p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Title">
      <TaglineWrapper1 />
      <Content11 />
    </div>
  );
}

function Header8() {
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

function Content13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header8 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $450
      </p>
    </div>
  );
}

function Product10() {
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
      <Content13 />
    </div>
  );
}

function Header9() {
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

function Content14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header9 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $450
      </p>
    </div>
  );
}

function Product11() {
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
      <Content14 />
    </div>
  );
}

function Header10() {
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

function Content15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header10 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $320
      </p>
    </div>
  );
}

function Product12() {
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
      <Content15 />
    </div>
  );
}

function Header11() {
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

function Content16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header11 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $275
      </p>
    </div>
  );
}

function Product13() {
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
      <Content16 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Product10 />
      <Product11 />
      <Product12 />
      <Product13 />
    </div>
  );
}

function Header12() {
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

function Content17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header12 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $450
      </p>
    </div>
  );
}

function Product14() {
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
      <Content17 />
    </div>
  );
}

function Header13() {
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

function Content18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header13 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $450
      </p>
    </div>
  );
}

function Product15() {
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
      <Content18 />
    </div>
  );
}

function Header14() {
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

function Content19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header14 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $320
      </p>
    </div>
  );
}

function Product16() {
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
      <Content19 />
    </div>
  );
}

function Header15() {
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

function Content20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 text-black text-center w-full" data-name="Content">
      <Header15 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        $275
      </p>
    </div>
  );
}

function Product17() {
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
      <Content20 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Product14 />
      <Product15 />
      <Product16 />
      <Product17 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <Row2 />
      <Row3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Title1 />
      <Content12 />
    </div>
  );
}

function Actions2() {
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

function Product9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Product / 4 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[112px] relative size-full">
          <Container2 />
          <Actions2 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Shop
      </p>
    </div>
  );
}

function Content21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        By category
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Find exactly what you need. Four doors to a better wardrobe.
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content21 />
    </div>
  );
}

function TaglineWrapper3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dresses
      </p>
    </div>
  );
}

function Content23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Effortless shapes for day and evening
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        From silk slips to structured wool. Pure form.
      </p>
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <TaglineWrapper3 />
      <Content23 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Actions">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Shop
        </p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative size-full">
          <ContentTop />
          <Actions3 />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[15px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[171px] relative shrink-0 w-full" data-name="Placeholder Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage1} />
        </div>
        <Content22 />
      </div>
      <div aria-hidden className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[15.5px]" />
    </div>
  );
}

function TaglineWrapper4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dresses
      </p>
    </div>
  );
}

function Content25() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Effortless shapes for day and evening
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        From silk slips to structured wool. Pure form.
      </p>
    </div>
  );
}

function ContentTop1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <TaglineWrapper4 />
      <Content25 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Actions">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Shop
        </p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative size-full">
          <ContentTop1 />
          <Actions4 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[15px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[171px] relative shrink-0 w-full" data-name="Placeholder Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage1} />
        </div>
        <Content24 />
      </div>
      <div aria-hidden className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[15.5px]" />
    </div>
  );
}

function TaglineWrapper5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tops
      </p>
    </div>
  );
}

function Content27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        The foundation of every look
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cashmere, cotton, and everything in between.
      </p>
    </div>
  );
}

function ContentTop2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <TaglineWrapper5 />
      <Content27 />
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Actions">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Shop
        </p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative size-full">
          <ContentTop2 />
          <Actions5 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[15px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[171px] relative shrink-0 w-full" data-name="Placeholder Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage1} />
        </div>
        <Content26 />
      </div>
      <div aria-hidden className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[15.5px]" />
    </div>
  );
}

function TaglineWrapper6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Accessories
      </p>
    </div>
  );
}

function Content29() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-black w-full" data-name="Content">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        The final word in a considered outfit
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Belts, scarves, and the small things that matter.
      </p>
    </div>
  );
}

function ContentTop3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <TaglineWrapper6 />
      <Content29 />
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Actions">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Shop
        </p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative size-full">
          <ContentTop3 />
          <Actions6 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[15px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[171px] relative shrink-0 w-full" data-name="Placeholder Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage1} />
        </div>
        <Content28 />
      </div>
      <div aria-hidden className="absolute border-[0.5px] border-black border-solid inset-[-0.5px] pointer-events-none rounded-[15.5px]" />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component">
      <Row4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Component />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 400 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Content31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center text-white w-full" data-name="Content">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Join our community
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Sign up for early access to new collections, private sales, and the stories behind the seams.
      </p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Text input">
        <div aria-hidden className="absolute border border-solid border-white inset-[-1px] pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[16px] text-[rgba(255,255,255,0.65)]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Enter your email
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-solid border-white inset-[-1px] pointer-events-none" />
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Subscribe
        </p>
      </div>
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[513px]" data-name="Actions">
      <Form />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-center text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        By clicking Subscribe you agree with our Terms and Conditions.
      </p>
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content31 />
      <Actions7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content30 />
    </div>
  );
}

function Cta() {
  return (
    <div className="relative shrink-0 w-full" data-name="CTA / 28 /">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgCta28} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 text-black text-center w-full" data-name="Section Title">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[48px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Follow us
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        See how the community wears Elevé. Tag us for a feature.
      </p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Column">
      <div className="aspect-[416/416] relative shrink-0 w-full" data-name="Placeholder Image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage2} />
      </div>
      <div className="aspect-[416/416] relative shrink-0 w-full" data-name="Placeholder Image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage2} />
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Column">
      <div className="aspect-[416/234] relative shrink-0 w-full" data-name="Placeholder Image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage2} />
      </div>
      <div className="aspect-[416/234] relative shrink-0 w-full" data-name="Placeholder Image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage2} />
      </div>
      <div className="aspect-[416/416] relative shrink-0 w-full" data-name="Placeholder Image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage2} />
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Column">
      <div className="aspect-[416/416] relative shrink-0 w-full" data-name="Placeholder Image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage2} />
      </div>
      <div className="aspect-[416/416] relative shrink-0 w-full" data-name="Placeholder Image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlaceholderImage2} />
      </div>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <SectionTitle1 />
      <Content32 />
    </div>
  );
}

function Gallery() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Gallery / 10 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Content33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] max-w-[560px] min-w-px relative text-white" data-name="Content">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Join our newsletter
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Receive early access to new collections and private sales.
      </p>
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Text input">
        <div aria-hidden className="absolute border border-solid border-white inset-[-1px] pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[16px] text-[rgba(0,0,0,0.6)]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Enter your email
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-solid border-white inset-[-1px] pointer-events-none" />
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Subscribe
        </p>
      </div>
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        By subscribing you agree to with our Privacy Policy
      </p>
    </div>
  );
}

function Actions8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative self-stretch shrink-0 w-[400px]" data-name="Actions">
      <Form1 />
      <Content34 />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Newsletter">
      <Content33 />
      <Actions8 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute left-[3.95px] size-[61.811px] top-0">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8113 61.8112">
        <g id="Group 16">
          <circle cx="30.9056" cy="30.9056" fill="var(--fill-0, white)" id="Ellipse 312" r="30.0658" stroke="var(--stroke-0, #D10743)" strokeWidth="1.67965" />
          <circle cx="30.9056" cy="30.9056" fill="var(--fill-0, white)" id="Ellipse 313" r="28.2105" stroke="var(--stroke-0, #D10743)" strokeWidth="0.714189" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[3.95px] top-0">
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-[2.56px]">
      <div className="absolute flex h-[62.954px] items-center justify-center left-0 top-[2.56px] w-[88.352px]">
        <div className="flex-none rotate-[10.83deg] scale-y-98 skew-x-[-11.24deg]">
          <div className="h-[53.877px] relative w-[69.341px]" data-name="image 27">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage27} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gugi:Regular',sans-serif] h-[11.824px] justify-center leading-[0] left-[34.95px] not-italic text-[#d10743] text-[7.67px] text-center top-[28.92px] tracking-[0.3835px] w-[40.265px]">
        <p className="leading-[normal] mb-0">KK</p>
        <p className="leading-[normal]">TAILORS</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[65.511px] relative shrink-0 w-[88.352px]" data-name="1">
      <Group7 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        New arrivals
      </p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dresses
      </p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tops
      </p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Bottoms
      </p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Sale
      </p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Shop
      </p>
      <FooterLinks />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Contact
      </p>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Shipping
      </p>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Returns
      </p>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        FAQ
      </p>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Size guide
      </p>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Customer service
      </p>
      <FooterLinks1 />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Our story
      </p>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Sustainability
      </p>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Careers
      </p>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Press
      </p>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Stores
      </p>
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link10 />
      <Link11 />
      <Link12 />
      <Link13 />
      <Link14 />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        About
      </p>
      <FooterLinks2 />
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Instagram
      </p>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Pinterest
      </p>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Facebook
      </p>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        TikTok
      </p>
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        X
      </p>
    </div>
  );
}

function FooterLinks3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link15 />
      <Link16 />
      <Link17 />
      <Link18 />
      <Link19 />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Follow
      </p>
      <FooterLinks3 />
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        My account
      </p>
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Order status
      </p>
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wishlist
      </p>
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Gift cards
      </p>
    </div>
  );
}

function Link24() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        Loyalty program
      </p>
    </div>
  );
}

function FooterLinks4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link20 />
      <Link21 />
      <Link22 />
      <Link23 />
      <Link24 />
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-name="Column">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[16px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Account
      </p>
      <FooterLinks4 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Links">
      <Component2 />
      <Column4 />
      <Column5 />
      <Column6 />
      <Column7 />
      <Column8 />
    </div>
  );
}

function Credits1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[24px] items-center leading-[1.5] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-name="Credits">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        © 2025 ELEVÉ. All rights reserved.
      </p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: '"wdth" 100' }}>
        Privacy policy
      </p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: '"wdth" 100' }}>
        Terms of service
      </p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cookies settings
      </p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Social Links">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Facebook">
        <div className="absolute inset-[9.34%_8.33%_7.32%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2c56c980} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Instagram">
        <div className="absolute inset-[13.51%_12.5%_11.49%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p9b0b480} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="X">
        <div className="absolute inset-[17.68%_12.5%_15.66%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <path d={svgPaths.pd265900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="LinkedIn">
        <div className="absolute inset-[13.51%_12.5%_11.49%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p56afe80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Youtube">
        <div className="absolute inset-[20.83%_8.33%_20.78%_8.27%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0141 14.012">
            <path d={svgPaths.p1fcc3d80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
      <Credits1 />
      <SocialLinks />
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Credits">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Divider" stroke="var(--stroke-0, white)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Row5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Newsletter />
      <Links />
      <Credits />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#8c7f76] relative shrink-0 w-full" data-name="Footer / 5 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

export default function DesktopHome() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Desktop – Home">
      <Product3 />
      <Product9 />
      <Layout />
      <Cta />
      <Gallery />
      <Footer />
    </div>
  );
}