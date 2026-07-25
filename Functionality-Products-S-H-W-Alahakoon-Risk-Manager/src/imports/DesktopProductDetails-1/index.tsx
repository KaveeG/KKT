import svgPaths from "./svg-ynbqa911kk";
import imgImage27 from "./b180ac54113cebf28684a3119ca0a4457cec4633.png";
import imgFrame2147226018 from "./218e6913b615945832a6d17bca2f30717844024d.png";

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

function Frame5() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[60px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute bg-[#bdbdbd] inset-0 rounded-[10px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
          <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgFrame2147226018} />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[60px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute bg-[#bdbdbd] inset-0 rounded-[10px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
          <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgFrame2147226018} />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[60px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute bg-[#bdbdbd] inset-0 rounded-[10px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
          <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgFrame2147226018} />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[60px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute bg-[#bdbdbd] inset-0 rounded-[10px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
          <img alt="" className="absolute h-[150%] left-[-0.55%] max-w-none top-[8.85%] w-full" src={imgFrame2147226018} />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col h-[291px] items-start justify-between relative shrink-0 w-[60px]">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-full relative rounded-[20px] shrink-0 w-[491px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
        <div className="absolute bg-[#999] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-[96.19%] left-[10.73%] max-w-none top-[3.87%] w-[79.03%]" src={imgFrame2147226018} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[40px] h-full items-center relative shrink-0">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Botton() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip px-[40px] py-[10px] relative rounded-[10px] shrink-0" data-name="botton">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Black
      </p>
    </div>
  );
}

function Botton1() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="botton">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[40px] py-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Red
        </p>
      </div>
      <div aria-hidden className="absolute border-[#ccc] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Botton2() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="botton">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[40px] py-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Blue
        </p>
      </div>
      <div aria-hidden className="absolute border-[#ccc] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Botton3() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="botton">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[40px] py-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Yellow
        </p>
      </div>
      <div aria-hidden className="absolute border-[#ccc] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Botton />
      <Botton1 />
      <Botton2 />
      <Botton3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Color
      </p>
      <Frame />
    </div>
  );
}

function Botton4() {
  return (
    <div className="bg-black relative rounded-[10px] shrink-0 w-[60px]" data-name="botton">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            S
          </p>
        </div>
      </div>
    </div>
  );
}

function Botton5() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-[60px]" data-name="botton">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            M
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#ccc] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Botton6() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-[60px]" data-name="botton">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            L
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#ccc] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Botton7() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-[60px]" data-name="botton">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            XL
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#ccc] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <Botton4 />
      <Botton5 />
      <Botton6 />
      <Botton7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black w-[491px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Size
      </p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[14px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #29EB1F)" id="Ellipse 318" r="7" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#29eb1f] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        In stock
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame12 />
    </div>
  );
}

function Botton8() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="botton">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Add to cart
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#999] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Botton9() {
  return (
    <div className="bg-black relative rounded-[10px] shrink-0 w-full" data-name="botton">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Buy it now
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Botton8 />
      <Botton9 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[25px] text-black w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Rs 4,999
      </p>
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 text-[16px] text-black whitespace-nowrap">
      <p className="leading-[1.5] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        DESCRIPTION
      </p>
      <div className="leading-[0] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.5] mb-0 whitespace-pre">. 60% COTTON 40% POLYESTER</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">​</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">. ULTRA SOFT FLEECE FABRIC</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">​</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">. CONTRAST PANELS</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">​</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">. MINIMAL BRANDING</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">​</p>
        <p className="leading-[1.5] whitespace-pre">. CONTRAST PIPING DETAILING</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start justify-center relative shrink-0 w-full">
      <Frame19 />
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[495px]">
      <Frame13 />
      <Frame16 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[60px] items-start min-h-px relative w-full">
      <Frame11 />
      <Frame17 />
    </div>
  );
}

export default function DesktopProductDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[60px] items-start pb-[80px] pt-[50px] px-[80px] relative size-full" data-name="Desktop – Product Details">
      <Container />
      <Frame14 />
    </div>
  );
}