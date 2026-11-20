
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { blogCategories, blogPosts } from "@/lib/blogs";

const POSTS_PER_PAGE = 6;

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const featuredPost = blogPosts.find((post) => post.featured);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const searchText = search.toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(searchText) ||
        post.excerpt.toLowerCase().includes(searchText) ||
        post.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  );

  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  function handleSearch(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  return (
    <main className="alin-blog-page">
      {/* Page heading */}
      <section className="alin-blog-hero">
        <div className="alin-container">
          <div className="alin-blog-hero-content">
            <span className="alin-section-label">
              ALINPAY INSIGHTS
            </span>

            <h1>
              Ideas that move
              <span> business forward.</span>
            </h1>

            <p>
              Insights, practical guidance and ideas to help you manage
              payments, simplify operations and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featuredPost && (
        <section className="alin-blog-featured-section">
          <div className="alin-container">
            <div className="alin-blog-featured">
              <Link
                href={`/blogs/${featuredPost.slug}`}
                className="alin-blog-featured-image"
              >
                <img src={featuredPost.image} alt={featuredPost.title} />
              </Link>

              <div className="alin-blog-featured-content">
                <span className="alin-blog-category">
                  {featuredPost.category}
                </span>

                <span className="alin-blog-featured-label">
                  FEATURED ARTICLE
                </span>

                <h2>
                  <Link href={`/blogs/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p>{featuredPost.excerpt}</p>

                <div className="alin-blog-meta">
                  <span>
                    <CalendarDays size={15} />
                    {featuredPost.date}
                  </span>
                  <span>
                    <Clock3 size={15} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="alin-blog-read-link"
                >
                  Read Full Article <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog listing */}
      <section className="alin-blog-listing-section">
        <div className="alin-container">
          <div className="alin-blog-section-heading">
            <div>
              <span className="alin-section-label">THE LATEST</span>
              <h2>Explore our latest articles</h2>
              <p>
                Discover ideas and practical insights for running a better
                business.
              </p>
            </div>
          </div>

          <div className="alin-blog-layout">
            {/* Main content */}
            <div className="alin-blog-main">
              <div className="alin-blog-toolbar">
                <div className="alin-blog-categories">
                  {blogCategories.map((category) => (
                    <button
                      type="button"
                      key={category}
                      className={
                        activeCategory === category ? "active" : ""
                      }
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="alin-blog-search">
                  <Search size={18} />
                  <input
                    type="search"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(event) => handleSearch(event.target.value)}
                    aria-label="Search articles"
                  />
                </div>
              </div>

              <div className="alin-blog-results">
                <span>
                  {filteredPosts.length}{" "}
                  {filteredPosts.length === 1 ? "article" : "articles"} found
                </span>
              </div>

              {visiblePosts.length > 0 ? (
                <div className="alin-blog-grid">
                  {visiblePosts.map((post) => (
                    <article className="alin-blog-card" key={post.slug}>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="alin-blog-card-image"
                      >
                        <img src={post.image} alt={post.title} />
                        <span className="alin-blog-card-category">
                          {post.category}
                        </span>
                      </Link>

                      <div className="alin-blog-card-content">
                        <div className="alin-blog-card-meta">
                          <span>
                            <CalendarDays size={14} />
                            {post.date}
                          </span>
                          <span>
                            <Clock3 size={14} />
                            {post.readTime}
                          </span>
                        </div>

                        <h3>
                          <Link href={`/blogs/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        <p>{post.excerpt}</p>

                        <Link
                          href={`/blogs/${post.slug}`}
                          className="alin-blog-read-link"
                        >
                          Read More <ArrowRight size={16} />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="alin-blog-empty">
                  <Search size={30} />
                  <h3>No articles found</h3>
                  <p>
                    Try another search term or select a different category.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All");
                      setCurrentPage(1);
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredPosts.length > POSTS_PER_PAGE && (
                <div className="alin-blog-pagination">
                  <button
                    type="button"
                    aria-label="Previous page"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) => Math.max(1, page - 1))
                    }
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      type="button"
                      key={index + 1}
                      className={
                        currentPage === index + 1 ? "active" : ""
                      }
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    type="button"
                    aria-label="Next page"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(totalPages, page + 1)
                      )
                    }
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="alin-blog-sidebar">
              <div className="alin-blog-sidebar-widget">
                <h3>About AlinPay</h3>
                <p>
                  AlinPay helps businesses manage payments and everyday
                  operations through connected digital financial tools.
                </p>
                <Link href="/about" className="alin-blog-sidebar-link">
                  Discover AlinPay <ArrowUpRight size={15} />
                </Link>
              </div>

              <div className="alin-blog-sidebar-widget">
                <h3>Categories</h3>
                <ul className="alin-blog-category-list">
                  {blogCategories
                    .filter((category) => category !== "All")
                    .map((category) => (
                      <li key={category}>
                        <button
                          type="button"
                          onClick={() => handleCategoryChange(category)}
                        >
                          {category}
                          <ArrowUpRight size={14} />
                        </button>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="alin-blog-sidebar-widget">
                <h3>Recent Articles</h3>
                <div className="alin-blog-recent-list">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="alin-blog-recent-item"
                      key={post.slug}
                    >
                      <img src={post.image} alt="" />
                      <div>
                        <span>{post.category}</span>
                        <h4>{post.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="alin-blog-sidebar-widget alin-blog-sidebar-cta">
                <span className="alin-section-label">GROW WITH ALIN</span>
                <h3>Ready to simplify your business?</h3>
                <p>
                  Discover digital tools designed to help you manage your
                  business more effectively.
                </p>
                <Link href="/contact" className="alin-btn alin-btn-primary">
                  Get in Touch <ArrowUpRight size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
