
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Share2,
} from "lucide-react";

import {
  blogPosts,
  getBlogBySlug,
  getRelatedPosts,
} from "@/lib/blogs";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | AlinPay",
    };
  }

  return {
    title: `${post.title} | AlinPay`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  const shareUrl = `https://alinpay.javaninformatics.com/blogs/${post.slug}`;

  return (
    <main className="alin-blog-details-page">
      {/* Article heading */}
      <section className="alin-blog-details-hero">
        <div className="alin-container">
          <div className="alin-blog-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blogs">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>

          <div className="alin-blog-details-heading">
            <span className="alin-blog-category">{post.category}</span>

            <h1>{post.title}</h1>

            <p>{post.excerpt}</p>

            <div className="alin-blog-details-meta">
              <span>
                <CalendarDays size={16} />
                {post.date}
              </span>
              <span>
                <Clock3 size={16} />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="alin-blog-details-image-section">
        <div className="alin-container">
          <div className="alin-blog-details-featured-image">
            <img src={post.image} alt={post.title} />
          </div>
        </div>
      </section>

      {/* Article and sidebar */}
      <section className="alin-blog-details-content-section">
        <div className="alin-container">
          <div className="alin-blog-details-layout">
            <article className="alin-blog-article">
              <div className="alin-blog-article-body">
                {post.content.map((block, index) => (
                  <div className="alin-blog-content-block" key={index}>
                    {block.heading && <h2>{block.heading}</h2>}

                    {block.paragraphs?.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}

                    {block.quote && (
                      <blockquote className="alin-blog-quote">
                        <span>“</span>
                        <p>{block.quote}</p>
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="alin-blog-article-tags">
                <strong>Tags:</strong>
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* Share */}
              <div className="alin-blog-share">
                <span>Share this article</span>

                <div>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF size={17} />
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn size={17} />
                  </a>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${shareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                  >
                    <Share2 size={17} />
                  </a>
                </div>
              </div>

              {/* Author */}
              <div className="alin-blog-author">
                <div className="alin-blog-author-avatar">A</div>
                <div>
                  <span>ABOUT THE AUTHOR</span>
                  <h3>{post.author}</h3>
                  <p>
                    {post.authorRole}. Sharing insights and practical ideas
                    to help businesses simplify operations and grow.
                  </p>
                </div>
              </div>

              <Link href="/blogs" className="alin-blog-back-link">
                <ArrowLeft size={17} /> Back to all articles
              </Link>
            </article>

            {/* Sidebar */}
            <aside className="alin-blog-sidebar">
              <div className="alin-blog-sidebar-widget">
                <h3>About AlinPay</h3>
                <p>
                  Discover digital financial and business management tools
                  designed to help businesses work smarter.
                </p>
                <Link href="/about" className="alin-blog-sidebar-link">
                  About AlinPay <ArrowUpRight size={15} />
                </Link>
              </div>

              <div className="alin-blog-sidebar-widget">
                <h3>Recent Articles</h3>
                <div className="alin-blog-recent-list">
                  {blogPosts
                    .filter((item) => item.slug !== post.slug)
                    .slice(0, 3)
                    .map((item) => (
                      <Link
                        href={`/blogs/${item.slug}`}
                        className="alin-blog-recent-item"
                        key={item.slug}
                      >
                        <img src={item.image} alt="" />
                        <div>
                          <span>{item.category}</span>
                          <h4>{item.title}</h4>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              <div className="alin-blog-sidebar-widget alin-blog-sidebar-cta">
                <span className="alin-section-label">ALINPAY</span>
                <h3>Make business management simpler.</h3>
                <p>
                  Explore tools for payments, financial management and
                  everyday business operations.
                </p>
                <Link href="/contact" className="alin-btn alin-btn-primary">
                  Contact Us <ArrowUpRight size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="alin-blog-related-section">
          <div className="alin-container">
            <div className="alin-blog-section-heading">
              <div>
                <span className="alin-section-label">KEEP EXPLORING</span>
                <h2>Related articles</h2>
                <p>Continue exploring more insights from AlinPay.</p>
              </div>

              <Link href="/blogs" className="alin-blog-view-all">
                View all articles <ArrowRight size={17} />
              </Link>
            </div>

            <div className="alin-blog-related-grid">
              {relatedPosts.map((related) => (
                <article className="alin-blog-card" key={related.slug}>
                  <Link
                    href={`/blogs/${related.slug}`}
                    className="alin-blog-card-image"
                  >
                    <img src={related.image} alt={related.title} />
                    <span className="alin-blog-card-category">
                      {related.category}
                    </span>
                  </Link>

                  <div className="alin-blog-card-content">
                    <div className="alin-blog-card-meta">
                      <span>
                        <CalendarDays size={14} />
                        {related.date}
                      </span>
                    </div>

                    <h3>
                      <Link href={`/blogs/${related.slug}`}>
                        {related.title}
                      </Link>
                    </h3>

                    <p>{related.excerpt}</p>

                    <Link
                      href={`/blogs/${related.slug}`}
                      className="alin-blog-read-link"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
