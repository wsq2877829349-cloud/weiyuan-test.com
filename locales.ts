import { Factory, Settings, Globe } from "lucide-react";
import { Product } from "./types";
import { DEMO_GALLERY_IMAGES } from "./constants";

// =========================================================================
// MEDIA ASSETS CONFIGURATION (Images, PDFs, Videos)
// Edit here to update media for BOTH languages automatically.
// =========================================================================
const PRODUCT_ASSETS: Record<string, Pick<Product, 'image' | 'images' | 'video' | 'pdfUrl'>> = {
  "featured-js3c": {
    image: "/images/machine-js3c.jpg",
    //images: DEMO_GALLERY_IMAGES,
    video: "null",
    pdfUrl: "/pdfs/js-3c.pdf"
  },
  "js-3c": {
    image: "/images/machine-js3c.jpg",
    //images: DEMO_GALLERY_IMAGES,
    video: "true",
    pdfUrl: "/pdfs/js-3c.pdf"
  },
  "dh-2": {
    image: "/images/DH-2.png",
    pdfUrl: "/pdfs/dh2.pdf"
  },
  "dh-3d": {
    image: "/images/DH-3D.png",
    pdfUrl: "/pdfs/dh3d.pdf"
  },
  "sh-2": {
    image: "/images/sh2.png",
    pdfUrl: "/pdfs/SH-2.pdf"
  },
  "sh-3": {
    image: "/images/sh3.png",
    pdfUrl: "/pdfs/SH-3.pdf"
  },
  "js-2pt": {
    image: "/images/JS-2PT (2).png",
    pdfUrl: "/pdfs/js-2PT.pdf"
  },
  "gs-1-2": {
    image: "/images/GS-1.png",
    pdfUrl: "/pdfs/gs12.pdf"
  },
  "yd-300": {
    image: "/images/.png",
    pdfUrl: "/pdfs/YD.pdf"
  },
  "gp-segment": {
    image: "/images/GP-LINK.png",
    pdfUrl: "/pdfs/2025gpsyj.pdf"
  },
  "cj-1": {
    image: "/images/CJ-1.png",
    pdfUrl: "/pdfs/cj1.pdf"
  },
  "gc-drainage": {
    image: "/images/GC-OUT.png",
    pdfUrl: "/pdfs/gcpaishuiguan.pdf"
  },
  "yqb-2": {
    image: "/images/YQB-2.png",
    pdfUrl: "/pdfs/yqbzhengqijiaya.pdf"
  },
  "gc-pipe-pile": {
    image: "/images/gz1.png",
    pdfUrl: "/pdfs/gz.pdf"
  },
  "ys-3c-flue": {
    image: "/images/ys3c.png",
    pdfUrl: "/pdfs/2025yd.pdf",
    images:["/images/ys3c.png",
      "/images/ys3c2.png",

    ]
    
  }
};

// =========================================================================
// CENTRAL ASSET CONFIGURATION (Edit this section to change global values)
// =========================================================================
const SHARED_ASSETS = {
  // International / Export Department
  global: {
    whatsapp: "+86 17365493280",
    email: "david@weiyuan-test.com",
  },
  // Domestic / Factory Direct
  contact: {
    phones: [
      "+86 13400031515", 
      "0510-8506 1219"
    ],
    emails: [
      "13400031515@163.com"
    ],
    address_zh: "江苏省无锡市滨湖区南泉南湖中路17号",
    address_en: "No. 17 Nanhu Middle Road, Nanquan, Binhu District, Wuxi City, Jiangsu Province"
  },
  images: {
    hero: "https://picsum.photos/id/180/1200/900", // Main Hero Image
  }
};

interface Resources {
  companyName: string;
  meta: { title: string; description: string };
  nav: { items: { label: string; href: string }[]; salesSupport: string; getQuote: string; callUs: string };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trustedBy: string;
    trustItems: string[];
    featuredLabel: string;
    featuredModel: string;
    image: string;
  };
  trustedMarquee: {
    title: string;
    items: string[];
  };
  trustBar: { label: string };
  product: Product & {
    badge: string;
    standardsLabel: string;
    consultCta: string;
    downloadCta: string;
    detailControl: string;
    detailHydraulic: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    viewDetailsLabel: string;
    items: Product[];
  };
  pdp: {
    backToCatalog: string;
    leadTimeLabel: string;
    leadTimeValue: string;
    datasheetButton: string;
    requestQuoteButton: string;
    idLabel: string;
    downloadsTitle: string;
    downloadsList: string;
    featuresTitle: string;
    paramsTitle: string;
    standardsTitle: string;
    standardsDesc: string;
    videoTitle: string;
    videoOverlay: string;
    downloadAlert: string;
    tabs: {
      specs: string;
      standards: string;
      video: string;
      faq: string;
    };
    defaultFeatures: string[];
    defaultFaqs: { question: string; answer: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; description: string; icon: any }[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    globalTitle: string;
    domesticTitle: string;
    addressLabel: string;
    address: string;
    copy: string;
    copied: string;
    details: typeof SHARED_ASSETS.contact;
    global: typeof SHARED_ASSETS.global;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}

export const RESOURCES: Record<'zh' | 'en', Resources> = {
  zh: {
    companyName: "伟源机械厂",
    meta: {
      title: "伟源机械厂 | 工业测试系统",
      description: "专为安全关键测试打造的精密工程。"
    },
    nav: {
      items: [
        { label: "首页", href: "#home" },
        { label: "关于我们", href: "#about" },
        { label: "产品", href: "#catalog" },
        { label: "联系我们", href: "#contact" },
      ],
      salesSupport: "销售热线",
      getQuote: "获取报价",
      callUs: "立即致电"
    },
    hero: {
      badge: "始于2005年，20年制造经验",
      title: "精密工程，铸就",
      highlight: "安全基石",
      description: "专为 EN 124、GB/T 及国际基建标准打造的先进测试仪器。",
      primaryCta: "探索解决方案",
      secondaryCta: "查看产品目录",
      trustedBy: "信赖伙伴:",
      trustItems: ["土木工程实验室", "市政管理局", "建筑公司"],
      featuredLabel: "明星机型",
      featuredModel: "JS-3C 1000KN 伺服系列",
      image: SHARED_ASSETS.images.hero
    },
    trustedMarquee: {
      title: "受国家级检测机构信赖",
      items: [
        "中国电力科学研究院武汉分院",
        "国家水泥制品研究院检测中心",
        "吉林省产品质量检验院",
        "南方电网创新电力科学研究院",
        "江苏省建筑工程质量检测中心",
        "山东省产品质量检验研究院",
        "河北省产品质量监督检验院"
      ]
    },
    trustBar: {
      label: "合规与认证标准"
    },
    product: {
      id: "featured-js3c",
      ...PRODUCT_ASSETS["featured-js3c"],
      badge: "热销产品",
      model: "JS-3C 1000KN",
      name: "微机控制电液伺服井盖压力试验机",
      description: "安全关键基础设施测试的行业标准。配备微机控制液压伺服系统，可进行精确加载和实时数据分析。支持通过观察孔检测裂纹并自动测量残留变形。",
      specs: [
        { label: "最大载荷", value: "1000 KN" },
        { label: "精度等级", value: "1级 (±1%)" },
        { label: "测试空间", value: "1080mm x 1080mm" },
        { label: "控制系统", value: "微机伺服液压" },
      ],
      standards: ["GB/T 23858", "EN 124", "CJ/T 511"],
      standardsLabel: "符合标准:",
      consultCta: "咨询工程师",
      downloadCta: "下载技术参数",
      detailControl: "控制面板细节",
      detailHydraulic: "液压伺服单元"
    },
    catalog: {
      title: "全系产品目录",
      subtitle: "满足市政工程、电力设施及建筑材料的全方位测试需求",
      viewDetailsLabel: "查看详情",
      items: [
        {
          id: "dh-2",
          ...PRODUCT_ASSETS["dh-2"],
          model: "DH-2",
          name: "电杆荷载挠度测试仪 (锂电池台式)",
          description: "便携式拉压及变形测量仪器。大屏幕液晶显示，内置锂电池，适合野外作业。",
          standards: ["电力行业标准"],
        },
        {
          id: "dh-3d",
          ...PRODUCT_ASSETS["dh-3d"],
          model: "DH-3D",
          name: "全自动无线电杆荷载挠度测试仪",
          description: "伺服电机控制，无噪音。自动补偿拉力，无线采集挠度及变形。符合GB4623环形混凝土电杆标准。",
          standards: ["GB4623-2014"],
        },
        {
          id: "sh-2",
          ...PRODUCT_ASSETS["sh-2"],
          model: "SH-2",
          name: "荷载测试仪",
          description: "适用于建材及混凝土制品的抗压强度测试。液晶显示，配置最多3个力传感器。",
          standards: ["通用建材标准"],
        },
        {
          id: "sh-3",
          ...PRODUCT_ASSETS["sh-3"],
          model: "SH-3",
          name: "无线荷载测试仪",
          description: "手持锂电池供电。主机和传感器无线连接（200米），防止信号干扰。配置1-20个力传感器。",
          standards: ["通用力学标准"],
        },
        {
          id: "js-2pt",
          ...PRODUCT_ASSETS["js-2pt"],
          model: "JS-2PT",
          name: "检查井盖试验机 (计算机控制)",
          description: "1000KN 计算机控制。包含上下平台、移动小车、动力千斤顶。可设定荷载力及加载速度。",
          standards: ["GB26537-2011", "GB/T23858-2009"],
        },
        {
          id: "js-3c",
          ...PRODUCT_ASSETS["js-3c"],
          model: "JS-3C",
          name: "检查井盖试验机 (电液伺服)",
          description: "1000KN 微机伺服控制。具备上观察孔查看裂缝，电动调节井盖厚度空间。自动测量残余变形。",
          standards: ["GB/T23858-2009", "GB26537-2011", "EN 124"],
          specs: [
            { label: "最大载荷", value: "1000 KN" },
            { label: "有效跨度", value: "1200mm" },
            { label: "活塞行程", value: "300mm" },
            { label: "精度", value: "1级" }
          ],
          features: [
            "自动测量残余变形",
            "伺服闭环控制系统",
            "上置观察孔设计",
            "过载保护机制"
          ],
          faqs: [
             { question: "是否支持非标井盖测试？", answer: "支持。我们可以根据您的井盖尺寸定制压头和底座。" },
             { question: "设备需要地基吗？", answer: "不需要特殊地基，标准工业混凝土地面即可。" }
          ],
        },
        {
          id: "gs-1-2",
          ...PRODUCT_ASSETS["gs-1-2"],
          model: "GS-Ⅰ/GS-Ⅱ",
          name: "排水管内水压试验机",
          description: "适用于各种型号水泥砼管进行内水压试验。GS-I为手动控制，GS-II为电动控制。采用钢结构焊接件及20mm加强橡胶板封堵。",
          standards: ["GB/T16752-2006"],
        },
        {
          id: "yd-300",
          ...PRODUCT_ASSETS["yd-300"],
          model: "YD-300",
          name: "烟道承载力试验机",
          description: "专为JG/T194-2018及JC/T854-2008标准设计。适用于住宅厨房、卫生间排气道及玻璃纤维增强水泥排气管道的承载力测试。采用计算机控制数字伺服电机，配备激光打印机。",
          standards: ["JG/T194-2018", "JC/T854-2008"],
          specs: [
            { label: "最大荷载", value: "300 KN" },
            { label: "承压板尺寸", value: "850 x 600 mm" },
            { label: "测试空间", value: "900 x 900 mm" },
            { label: "垂直拉伸", value: "900 - 3000 mm" },
            { label: "机器高度", value: "4.5 m" }
          ],
          features: [
            "计算机软件控制加载",
            "电动丝杠调节空间",
            "激光打印试验报表",
            "高刚性门式框架 (4.5m高)"
          ],
        },
        {
          id: "gp-segment",
          ...PRODUCT_ASSETS["gp-segment"],
          model: "GP Series",
          name: "预制混凝土衬砌管片试验机",
          description: "用于盾构管片（钢筋混凝土、钢纤维、铸铁等）的抗弯、抗渗、抗拔试验。最大13.7米内径支持。",
          standards: ["GB/T22082-2017"],
        },
        {
          id: "cj-1",
          ...PRODUCT_ASSETS["cj-1"],
          model: "CJ-1",
          name: "电杆锤击性能试验设备",
          description: "专用于超高性能混凝土电杆抗撞击性能试验。全钢结构，含标准正方锤头及摆臂。",
          standards: ["T/CEC143-2017"],
        },
        {
          id: "gc-drainage",
          ...PRODUCT_ASSETS["gc-drainage"],
          model: "GC Series",
          name: "排水管外压试验机",
          description: "适用于全系列排水管外压试验。最大试验直径3500mm。可选手动或计算机微机控制加载。",
          standards: ["GB/T16752-2006"],
        },
        {
          id: "yqb-2",
          ...PRODUCT_ASSETS["yqb-2"],
          model: "YQB-2",
          name: "蒸汽加压混凝土板试验机",
          description: "开放式框架设计。双量程（20kN/50kN）及3个变形点自动测量。用于蒸压加气混凝土板。",
          standards: ["GB/T15762-2020"],
        },
        {
          id: "gc-pipe-pile",
          ...PRODUCT_ASSETS["gc-pipe-pile"],
          model: "GC-15M",
          name: "管桩检测试验机 (抗弯)",
          description: "专用于混凝土管桩抗弯性能检测。支持φ300-φ800mm管径，最大试验长度15米。采用龙门框架结构，可选配500-1000KN手动或电动分体液压加载及微机控制系统。",
          standards: ["GB/T 13476"],
          specs: [
            { label: "试验直径", value: "φ300 - φ800 mm" },
            { label: "最大长度", value: "15 m" },
            { label: "加载能力", value: "500 - 1000 KN" },
            { label: "精度等级", value: "≤ 1%" }
          ],
          features: [
             "Manual/Electric/Computer Control Options",
             "Movable Reaction Beam",
             "Includes Round & Square Pile Molds",
             "Digital or Computer Display"
          ],
        },
        {
          id: "ys-3c-flue",
          ...PRODUCT_ASSETS["ys-3c-flue"],
          model: "YS-3C",
          name: "烟道及塑料井试验机",
          description: "专为JG/T194及CJ/T233标准设计。适用于住宅厨房、卫生间排气道及塑料检查井的荷载强度测试。采用计算机控制数字伺服电机油泵，配备激光打印机。",
          standards: ["JG/T194-2018", "JC/T854-2008", "CJ/T233-2016", "CJ/T326-2010"],
          specs: [
            { label: "最大载荷", value: "300 KN" },
            { label: "试验量程", value: "3-300 KN" },
            { label: "精度等级", value: "1级" },
            { label: "有效空间", value: "850 x 850 mm" },
            { label: "压板间距", value: "400 - 3100 mm" }
          ],
          features: [
            "烟道/塑料井双模式软件设定",
            "多种压板适配 (Φ140, 200, 300, 450mm)",
            "计算机伺服控制加载",
            "自动打印试验报告"
          ],
        },
      ]
    },
    pdp: {
      backToCatalog: "返回产品目录",
      leadTimeLabel: "交货周期",
      leadTimeValue: "14 天",
      datasheetButton: "下载技术参数",
      requestQuoteButton: "获取报价",
      idLabel: "产品编号",
      downloadsTitle: "下载中心",
      downloadsList: "技术规格书 (PDF), 安装指南",
      featuresTitle: "产品特性",
      paramsTitle: "技术参数",
      standardsTitle: "符合标准",
      standardsDesc: "本设备的设计和制造完全符合并超越以下国际测试标准。每台设备出厂时均附带工厂校准证书。",
      videoTitle: "视频演示",
      videoOverlay: "观看操作演示",
      downloadAlert: "正在下载...",
      tabs: {
        specs: "规格参数",
        standards: "执行标准",
        video: "视频演示",
        faq: "常见问题",
      },
      defaultFeatures: [
        "高刚性钢框架（200% 安全余量）",
        "闭环伺服控制系统",
        "实时数据采集 (50Hz)",
        "过载保护与急停装置"
      ],
      defaultFaqs: [
        { question: "该型号的发货周期是多久？", answer: "标准型号通常在 2 周内发货。定制配置需要 4-6 周。" },
        { question: "是否符合 EN 124 D400 标准？", answer: "是的，该机器经过专门校准，超过 EN 124 D400 的要求。" },
        { question: "包含现场校准服务吗？", answer: "我们提供工厂校准证书。现场服务可以单独安排。" }
      ]
    },
    features: {
      title: "我们为什么“贵”",
      subtitle: "我们不便宜，也永远不会便宜。同行用回收钢材和虚假数据以此压价，我们拒绝妥协。我们坚持“过度设计”，预留200%的安全余量。宁可失去订单，也绝不制造一年就坏的工业垃圾。如果您只看重最低价，请另寻他处；如果您需要一台能伴随您整个职业生涯的设备，欢迎选择伟源。",
      items: [
        {
          title: "源头直供，拒绝差价",
          description: "无锡工厂直发。拒绝中间商赚差价，您的每一分钱都花在设备质量上。",
          icon: Factory
        },
        {
          title: "硬核工程研发",
          description: "拒绝套壳。内部工程团队根据您的需求定制，确保软硬件完全合规。",
          icon: Settings
        },
        {
          title: "全球重装物流",
          description: "专业的大型机械物流。安全木箱，完整单证，确保设备完好无损抵达。",
          icon: Globe
        }
      ]
    },
    contact: {
      title: "联系我们",
      subtitle: "直接联系工厂工程师或销售部门，获取最专业的建议。",
      emailLabel: "电子邮箱",
      phoneLabel: "电话 / 微信",
      whatsappLabel: "WhatsApp",
      globalTitle: "全球业务 / 出口部",
      domesticTitle: "国内业务 / 工厂直销",
      addressLabel: "工厂地址",
      address: SHARED_ASSETS.contact.address_en,
      copy: "复制",
      copied: "已复制",
      details: SHARED_ASSETS.contact,
      global: SHARED_ASSETS.global
    },
    footer: {
      tagline: "精密测试仪器，为了更安全的世界。二十余年坚守严苛国际标准。",
      navTitle: "Navigation",
      contactTitle: "Contact Factory",
      rights: "© 2024 Wuxi Weiyuan Machinery Factory. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  en: {
    companyName: "Weiyuan Machinery Factory",
    meta: {
      title: "Weiyuan Machinery Factory | Industrial Testing Systems",
      description: "Precision Engineering for Safety Critical Testing."
    },
    nav: {
      items: [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Products", href: "#catalog" },
        { label: "Contact Us", href: "#contact" },
      ],
      salesSupport: "Sales Support",
      getQuote: "Get a Quote",
      callUs: "Call Us Now"
    },
    hero: {
      badge: "Est. 2005 · 20 Years Experience",
      title: "Precision Engineering for ",
      highlight: "Safety Critical",
      description: "Advanced material testing instruments designed for compliance with EN 124, GB/T, and international infrastructure standards.",
      primaryCta: "Explore Solutions",
      secondaryCta: "View Catalog",
      trustedBy: "Trusted by:",
      trustItems: ["Civil Engineering Labs", "Municipal Boards", "Construction Firms"],
      featuredLabel: "Featured Model",
      featuredModel: "JS-3C 1000KN Servo Series",
      image: SHARED_ASSETS.images.hero
    },
    trustedMarquee: {
      title: "Trusted by National Testing Institutions",
      items: [
        "China Electric Power Research Institute (Wuhan)",
        "National Cement Products Research Institute",
        "Jilin Product Quality Inspection Institute",
        "CSG Electric Power Research Institute",
        "Jiangsu Construction Engineering Quality Testing Center",
        "Shandong Product Quality Inspection Institute",
        "Hebei Product Quality Supervision Institute"
      ]
    },
    trustBar: {
      label: "Compliance & Certification Standards"
    },
    product: {
      id: "featured-js3c",
      ...PRODUCT_ASSETS["featured-js3c"],
      badge: "Best Seller",
      model: "JS-3C 1000KN",
      name: "Electro-hydraulic Servo Manhole Cover Testing Machine",
      description: "The industry standard for safety-critical infrastructure testing. Features a computer-controlled hydraulic servo system for precise load application and real-time data analysis. Capable of detecting cracks via observation port and measuring residual deformation automatically.",
      specs: [
        { label: "Max Load Capacity", value: "1000 KN" },
        { label: "Accuracy Class", value: "Class 1 (±1%)" },
        { label: "Test Space", value: "1080mm x 1080mm" },
        { label: "Control System", value: "Computer Servo Hydraulic" },
      ],
      standards: ["GB/T 23858", "EN 124", "CJ/T 511"],
      standardsLabel: "Compliant with Standards:",
      consultCta: "Consult an Engineer",
      downloadCta: "Download Datasheet",
      detailControl: "Control Panel Detail",
      detailHydraulic: "Hydraulic Servo Unit"
    },
    catalog: {
      title: "Full Product Catalog",
      subtitle: "Comprehensive testing solutions for municipal engineering, power facilities, and construction materials.",
      viewDetailsLabel: "View Details",
      items: [
        {
          id: "dh-2",
          ...PRODUCT_ASSETS["dh-2"],
          model: "DH-2",
          name: "Electric Pole Load Deflection Tester",
          description: "Portable, lithium-battery powered. Measures load, displacement, and peak values for poles in field conditions.",
          standards: ["Industry Standard"],
        },
        {
          id: "dh-3d",
          ...PRODUCT_ASSETS["dh-3d"],
          model: "DH-3D",
          name: "Automatic Wireless Pole Tester",
          description: "Servo motor control (noise-free). Automatic force compensation and wireless data collection. Prints reports.",
          standards: ["GB4623-2014"],
        },
        {
          id: "sh-2",
          ...PRODUCT_ASSETS["sh-2"],
          model: "SH-2",
          name: "Load Tester",
          description: "For compressive strength testing of building materials and concrete products. LCD display.",
          standards: ["General Construction"],
        },
        {
          id: "sh-3",
          ...PRODUCT_ASSETS["sh-3"],
          model: "SH-3",
          name: "Wireless Load Tester",
          description: "Handheld with wireless connection (200m range). Anti-interference design. Supports up to 20 force sensors.",
          standards: ["General Mechanics"],
        },
        {
          id: "js-2pt",
          ...PRODUCT_ASSETS["js-2pt"],
          model: "JS-2PT",
          name: "Computer Controlled Manhole Cover Tester",
          description: "1000KN Computer Control. Includes mobile carriage, power jack, and rigid pads. customizable load speed and hold time.",
          standards: ["GB26537-2011", "GB/T23858-2009"],
        },
        {
          id: "js-3c",
          ...PRODUCT_ASSETS["js-3c"],
          model: "JS-3C",
          name: "Servo Manhole Cover Testing Machine",
          description: "1000KN Servo Control. Features upper observation port for crack detection and automatic residual deformation measurement.",
          standards: ["GB/T23858-2009", "GB26537-2011", "EN 124"],
          specs: [
            { label: "Max Load", value: "1000 KN" },
            { label: "Effective Span", value: "1200mm" },
            { label: "Piston Stroke", value: "300mm" },
            { label: "Accuracy", value: "Class 1" }
          ],
          features: [
            "Automatic Residual Deformation",
            "Servo Closed-Loop Control",
            "Upper Observation Port",
            "Overload Protection"
          ],
          faqs: [
             { question: "Can it test non-standard manhole shapes?", answer: "Yes. We can customize the pressure head and base to fit your specific shapes." },
             { question: "Does it require a special foundation?", answer: "No special foundation is required. Standard industrial concrete flooring is sufficient." }
          ],
        },
        {
          id: "gs-1-2",
          ...PRODUCT_ASSETS["gs-1-2"],
          model: "GS-Ⅰ/GS-Ⅱ",
          name: "Drainage Pipe Internal Water Pressure Tester",
          description: "Internal water pressure testing for concrete pipes. GS-I (Manual) & GS-II (Electric). Features reinforced rubber sealing (20mm) and steel structure.",
          standards: ["GB/T16752-2006"],
        },
        {
          id: "yd-300",
          ...PRODUCT_ASSETS["yd-300"],
          model: "YD-300",
          name: "Smoke Flue Load Bearing Tester",
          description: "Designed for JG/T194-2018. Suitable for load bearing testing of residential kitchen/bathroom exhaust flues. Features computer-controlled digital servo motor and laser printer.",
          standards: ["JG/T194-2018", "JC/T854-2008"],
          specs: [
            { label: "Max Load", value: "300 KN" },
            { label: "Platen Size", value: "850 x 600 mm" },
            { label: "Test Space", value: "900 x 900 mm" },
            { label: "Vertical Span", value: "900 - 3000 mm" },
            { label: "Overall Height", value: "4.5 m" }
          ],
          features: [
            "Computer Servo Control",
            "Electric Screw Adjustment",
            "Laser Printed Reports",
            "High Rigidity Frame (4.5m)"
          ],
        },
        {
          id: "gp-segment",
          ...PRODUCT_ASSETS["gp-segment"],
          model: "GP Series",
          name: "Prefabricated Concrete Lining Segment Tester",
          description: "Tests bending, anti-permeability, and pull-out strength for tunnel segments (Concrete/Steel). Supports large diameters up to 13.7m.",
          standards: ["GB/T22082-2017"],
        },
        {
          id: "cj-1",
          ...PRODUCT_ASSETS["cj-1"],
          model: "CJ-1",
          name: "Pole Impact Performance Tester",
          description: "Specialized for ultra-high performance concrete pole impact testing. Full steel structure with standard square hammer.",
          standards: ["T/CEC143-2017"],
        },
        {
          id: "gc-drainage",
          ...PRODUCT_ASSETS["gc-drainage"],
          model: "GC Series",
          name: "Drainage Pipe External Pressure Tester",
          description: "For external pressure testing of pipes up to 3500mm diameter. Available in Manual or Computer Controlled versions.",
          standards: ["GB/T16752-2006"],
        },
        {
          id: "yqb-2",
          ...PRODUCT_ASSETS["yqb-2"],
          model: "YQB-2",
          name: "Steam Pressurized Concrete Slab Tester",
          description: "Open frame design. Dual range (20kN/50kN) with 3-point automatic deformation measurement.",
          standards: ["GB/T15762-2020"],
        },
        {
          id: "gc-pipe-pile",
          ...PRODUCT_ASSETS["gc-pipe-pile"],
          model: "GC-15M",
          name: "Concrete Pipe Pile Bending Tester",
          description: "Designed for bending tests of concrete pipe piles (φ300-800mm). Max test length 15m. Gantry frame structure with hoist-adjustable beam. Standard 500-1000KN hydraulic loading.",
          standards: ["GB/T 13476"],
          specs: [
            { label: "Test Diameter", value: "φ300 - φ800 mm" },
            { label: "Max Length", value: "15 m" },
            { label: "Load Capacity", value: "500 - 1000 KN" },
            { label: "Accuracy", value: "≤ 1%" }
          ],
          features: [
             "Manual/Electric/Computer Control Options",
             "Movable Reaction Beam",
             "Includes Round & Square Pile Molds",
             "Digital or Computer Display"
          ],
        },
        {
          id: "ys-3c-flue",
          ...PRODUCT_ASSETS["ys-3c-flue"],
          model: "YS-3C",
          name: "Flue and Plastic Well Testing Machine",
          description: "Designed for JG/T194 and CJ/T233 standards. Suitable for load strength testing of residential exhaust flues and plastic inspection wells. Features computer-controlled digital servo pump and laser printer.",
          standards: ["JG/T194-2018", "JC/T854-2008", "CJ/T233-2016", "CJ/T326-2010"],
          specs: [
            { label: "Max Load", value: "300 KN" },
            { label: "Test Range", value: "3-300 KN" },
            { label: "Accuracy", value: "Class 1" },
            { label: "Test Space", value: "850 x 850 mm" },
            { label: "Platen Spacing", value: "400 - 3100 mm" }
          ],
          features: [
            "Dual Mode Software (Flue/Well)",
            "Multiple Platen Sizes (Φ140-450mm)",
            "Computer Servo Control",
            "Auto Report Printing"
          ],
        },
      ]
    },
    pdp: {
      backToCatalog: "Back to Catalog",
      leadTimeLabel: "Lead Time",
      leadTimeValue: "14 Days",
      datasheetButton: "Download Datasheet",
      requestQuoteButton: "Request Quote",
      idLabel: "Product ID",
      downloadsTitle: "Downloads",
      downloadsList: "Technical Datasheet (PDF), Installation Guide",
      featuresTitle: "Features",
      paramsTitle: "Technical Parameters",
      standardsTitle: "Compliance Standards",
      standardsDesc: "This equipment is designed and manufactured to fully meet and exceed the following international testing standards. Each unit comes with a factory calibration certificate.",
      videoTitle: "Video Demo",
      videoOverlay: "Watch Operation Demo",
      downloadAlert: "Downloading datasheet...",
      tabs: {
        specs: "Specifications",
        standards: "Standards",
        video: "Video Demo",
        faq: "FAQ",
      },
      defaultFeatures: [
        "High Rigidity Steel Frame (200% Safety Margin)",
        "Closed-Loop Servo Control System",
        "Real-time Data Acquisition (50Hz)",
        "Overload Protection & Emergency Stop"
      ],
      defaultFaqs: [
        { question: "What is the lead time for this model?", answer: "Standard models ship within 2 weeks. Custom configurations require 4-6 weeks." },
        { question: "Does it comply with EN 124 D400?", answer: "Yes, this machine is specifically calibrated to exceed EN 124 D400 requirements." },
        { question: "Is on-site calibration included?", answer: "We provide factory calibration certificates. On-site services can be arranged separately." }
      ]
    },
    features: {
      title: "Why We Are Expensive",
      subtitle: "We are not the cheapest. We never will be. Competitors cut corners with recycled steel and fake data. We don't. We over-engineer with 200% safety margins. We prefer to lose a sale than sell a machine that breaks in a year. If you want the lowest price, go elsewhere. If you want a machine that outlasts your career, stay here.",
      items: [
        {
          title: "Factory Direct. No Middlemen.",
          description: "You deal with Wuxi. No intermediaries. Your money pays for steel and sensors, not sales commissions.",
          icon: Factory
        },
        {
          title: "Real Engineering",
          description: "We don't just assemble; we engineer. We customize dimensions and protocols to meet your exact compliance needs.",
          icon: Settings
        },
        {
          title: "Heavy Duty Logistics",
          description: "We ship heavy metal. We use secure crating and handle all export documentation to ensure it arrives ready to work.",
          icon: Globe
        }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Reach out directly to our factory engineers or sales team for professional advice.",
      emailLabel: "Work Email",
      phoneLabel: "Phone / WeChat",
      whatsappLabel: "WhatsApp",
      globalTitle: "Global Business / Export",
      domesticTitle: "Domestic Sales / Factory",
      addressLabel: "Factory Address",
      address: SHARED_ASSETS.contact.address_en,
      copy: "Copy",
      copied: "Copied",
      details: SHARED_ASSETS.contact,
      global: SHARED_ASSETS.global
    },
    footer: {
      tagline: "Precision testing instruments for a safer world. Adhering to strict international standards for over two decades.",
      navTitle: "Navigation",
      contactTitle: "Contact Factory",
      rights: "© 2024 Wuxi Weiyuan Machinery Factory. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  }
};