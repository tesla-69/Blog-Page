export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  imageUrl: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js, a powerful React framework that makes development a breeze.',
    content: `Next.js is a powerful React framework that makes building web applications a breeze. 
In this comprehensive guide, we'll explore the key features that make Next.js stand out.

Why Next.js?

Next.js provides several benefits out of the box:
- Server-side rendering
- Static site generation
- API routes
- File-system based routing
- Built-in CSS and Sass support
- Fast refresh
- TypeScript support

Getting Started

To create a new Next.js project, you can use the following command:
\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new Next.js project with all the necessary dependencies and a basic project structure.

Key Features

1. File-system Based Routing

Next.js uses the file system for routing. Simply create a file in the pages directory, and it becomes a route.

2. Server-side Rendering

Next.js provides built-in server-side rendering, which can significantly improve your application's performance and SEO.

3. API Routes

You can create API endpoints by adding files to the \`pages/api\` directory.

Conclusion

Next.js is an excellent choice for building modern web applications. Its rich feature set and developer experience make it a top choice for React developers.`,
    date: 'Mar 16, 2024',
    author: 'John Doe',
    authorRole: 'Frontend Developer',
    authorImage: '/images/authors/john-doe.jpg',
    imageUrl: '/images/blog-1.svg',
    readTime: '5 min read',
    category: 'Framework',
    tags: ['Next.js', 'React', 'Web Development', 'JavaScript'],
    slug: 'getting-started-with-nextjs'
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    excerpt: 'Dive deep into Tailwind CSS and learn how to build beautiful, responsive interfaces with the utility-first framework.',
    content: `Tailwind CSS has revolutionized the way we style web applications. Let's dive deep into its features and best practices.

## Introduction to Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build modern websites without ever leaving your HTML.

## Key Concepts

### 1. Utility-First Approach

Instead of writing custom CSS, you compose styles using utility classes. This approach offers:
- Faster development
- Consistent styling
- Lower cognitive overhead
- Better maintainability

### 2. Configuration

Tailwind is highly customizable through its configuration file:
- Custom colors
- Custom spacing
- Custom breakpoints
- Custom variants

### 3. Responsive Design

Built-in responsive modifiers make it easy to build responsive interfaces:
- sm: >= 640px
- md: >= 768px
- lg: >= 1024px
- xl: >= 1280px
- 2xl: >= 1536px

## Best Practices

1. Keep your classes organized
2. Use component extraction when needed
3. Leverage Tailwind's configuration
4. Use @apply for repeated patterns
5. Maintain consistent spacing

## Conclusion

Tailwind CSS provides a robust foundation for modern web development, offering flexibility and maintainability while keeping your codebase clean and efficient.`,
    date: 'Mar 15, 2024',
    author: 'Jane Smith',
    authorRole: 'UI Designer',
    authorImage: '/images/authors/jane-smith.jpg',
    imageUrl: '/images/blog-2.svg',
    readTime: '8 min read',
    category: 'Styling',
    tags: ['Tailwind CSS', 'CSS', 'Web Design', 'Frontend'],
    slug: 'mastering-tailwind-css'
  },
  {
    id: 3,
    title: 'Web Development Best Practices',
    excerpt: 'Explore essential best practices for modern web development, from code quality to performance optimization.',
    content: `Learn the essential best practices that every web developer should follow for building better applications.

## Code Quality

### 1. Write Clean Code

- Keep functions small and focused
- Use meaningful variable names
- Follow consistent coding standards
- Document your code properly
- Use proper indentation

### 2. Testing

Always write tests for your code to ensure reliability:
- Unit tests
- Integration tests
- End-to-end tests
- Performance tests

### 3. Performance

Optimize your applications for the best user experience:
- Minimize HTTP requests
- Optimize images
- Use code splitting
- Implement caching
- Enable compression

## Security

1. Input Validation
- Sanitize user input
- Use parameterized queries
- Implement CSRF protection

2. Authentication & Authorization
- Use secure password hashing
- Implement proper session management
- Use JWT tokens securely

3. Data Protection
- Use HTTPS everywhere
- Encrypt sensitive data
- Regular security audits

## Deployment

Follow CI/CD best practices for smooth deployments:
1. Automated testing
2. Staging environments
3. Rolling updates
4. Monitoring and logging
5. Backup strategies

## Conclusion

Following these best practices will help you build more reliable, secure, and maintainable web applications.`,
    date: 'Mar 14, 2024',
    author: 'Mike Johnson',
    authorRole: 'Senior Developer',
    authorImage: '/images/authors/mike-johnson.jpg',
    imageUrl: '/images/blog-3.svg',
    readTime: '10 min read',
    category: 'Development',
    tags: ['Web Development', 'Best Practices', 'Security', 'Performance'],
    slug: 'web-development-best-practices'
  }
]; 