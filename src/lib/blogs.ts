
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
  content: {
    heading?: string;
    paragraphs?: string[];
    quote?: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "digital-payments-transforming-kenyan-businesses",
    title: "How Digital Payments Are Transforming Kenyan Businesses",
    excerpt:
      "Discover how digital payment solutions are helping Kenyan businesses simplify transactions, improve cash flow and serve customers better.",
    category: "Digital Payments",
    author: "AlinPay Editorial Team",
    authorRole: "Business & Technology",
    date: "November 12, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    featured: true,
    tags: ["Digital Payments", "Kenya", "Business"],
    content: [
      {
        paragraphs: [
          "Digital payments are changing how businesses operate across Kenya. From small retail shops to growing enterprises, businesses are increasingly adopting digital tools to receive payments, manage transactions and serve customers.",
          "As customer expectations evolve, convenient and reliable payment experiences are becoming an important part of running a competitive business."
        ]
      },
      {
        heading: "A shift towards convenient transactions",
        paragraphs: [
          "Customers increasingly expect businesses to offer convenient ways to pay. Mobile money and digital payment platforms have made it easier for customers to complete transactions without relying entirely on cash.",
          "For businesses, this can mean faster payment processing, better transaction visibility and fewer manual reconciliation challenges."
        ]
      },
      {
        heading: "Better visibility into business finances",
        paragraphs: [
          "Digital transaction records can help business owners understand their sales activity, monitor incoming payments and make more informed financial decisions.",
          "When payment information is organised alongside other business records, owners can gain a clearer picture of how their businesses are performing."
        ]
      },
      {
        quote:
          "A better payment experience is not just about receiving money. It is also about understanding and managing every transaction."
      },
      {
        heading: "Building a more connected business",
        paragraphs: [
          "The next step for many businesses is connecting payments with inventory, sales records, expenses and reporting. This reduces the need to manage different processes separately.",
          "AlinPay aims to help businesses bring these everyday financial and operational activities into a more connected experience."
        ]
      }
    ]
  },
  {
    slug: "why-small-businesses-need-better-financial-management",
    title: "Why Small Businesses Need Better Financial Management",
    excerpt:
      "Good financial management helps business owners understand their cash flow, control expenses and make confident decisions.",
    category: "Business Management",
    author: "AlinPay Editorial Team",
    authorRole: "Business & Technology",
    date: "November 8, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
    tags: ["SMEs", "Financial Management", "Business"],
    content: [
      {
        paragraphs: [
          "Running a small business involves much more than making sales. Business owners must also manage expenses, monitor cash flow, follow up on outstanding payments and plan for future needs.",
          "Without reliable financial records, it can become difficult to understand whether a business is growing sustainably."
        ]
      },
      {
        heading: "Understand where your money goes",
        paragraphs: [
          "Recording daily income and expenses gives business owners a clearer view of their financial position. It can also help identify unnecessary costs and opportunities to improve profitability."
        ]
      },
      {
        heading: "Make cash flow easier to monitor",
        paragraphs: [
          "Cash flow affects a business's ability to pay suppliers, meet operating expenses and invest in growth. Keeping track of money coming in and going out helps owners prepare for upcoming obligations."
        ]
      },
      {
        heading: "Use technology to simplify daily operations",
        paragraphs: [
          "Digital tools can reduce repetitive record-keeping and bring important business information together. This gives owners more time to focus on customers and business growth.",
          "With AlinPay, businesses can work towards managing payments and everyday operations from a more connected platform."
        ]
      }
    ]
  },
  {
    slug: "the-role-of-inventory-management-in-business-growth",
    title: "The Role of Inventory Management in Business Growth",
    excerpt:
      "Learn why accurate stock records matter and how better inventory practices can help businesses reduce losses and serve customers.",
    category: "Technology",
    author: "AlinPay Editorial Team",
    authorRole: "Business & Technology",
    date: "November 3, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    tags: ["Inventory", "Retail", "Technology"],
    content: [
      {
        paragraphs: [
          "Inventory is one of the most important resources for many retail and wholesale businesses. Poor stock visibility can lead to lost sales, unnecessary purchasing and avoidable business costs."
        ]
      },
      {
        heading: "Know what is available",
        paragraphs: [
          "Accurate stock records help business owners know which products are available, which items are moving quickly and when replenishment is needed."
        ]
      },
      {
        heading: "Reduce avoidable losses",
        paragraphs: [
          "Regular stock monitoring can help businesses identify discrepancies, slow-moving products and potential stock losses before they become larger problems."
        ]
      },
      {
        heading: "Connect inventory with sales",
        paragraphs: [
          "When inventory records are connected to sales activity, businesses can make better purchasing decisions and understand product performance.",
          "An integrated approach to sales and inventory management can make daily operations more organised and easier to monitor."
        ]
      }
    ]
  },
  {
    slug: "making-business-payments-simpler-and-more-organised",
    title: "Making Business Payments Simpler and More Organised",
    excerpt:
      "Explore practical ways to organise supplier payments, customer collections and everyday business transactions.",
    category: "Alin Updates",
    author: "AlinPay Editorial Team",
    authorRole: "Business & Technology",
    date: "October 28, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
    tags: ["Payments", "SMEs", "AlinPay"],
    content: [
      {
        paragraphs: [
          "Business payments happen every day. Customers make purchases, businesses pay suppliers and owners handle operating expenses. When these transactions are difficult to track, managing the business becomes more complicated."
        ]
      },
      {
        heading: "Keep payment records organised",
        paragraphs: [
          "A consistent record of transactions helps business owners review payment activity and follow up on outstanding amounts."
        ]
      },
      {
        heading: "Create a more connected workflow",
        paragraphs: [
          "Bringing payment activity together with invoices, expenses and business reports can reduce fragmented processes and make information easier to access."
        ]
      },
      {
        heading: "Make everyday operations easier",
        paragraphs: [
          "The right digital tools can help businesses spend less time on manual administration and more time serving customers and growing their operations."
        ]
      }
    ]
  }
];

export const blogCategories = [
  "All",
  "Digital Payments",
  "Business Management",
  "Technology",
  "Alin Updates"
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, category: string) {
  return blogPosts
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, 2);
}
