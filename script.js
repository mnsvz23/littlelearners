

// Supabase initialization
const supabaseUrl = 'https://axygfmjqwqjioypcqdmo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4eWdmbWpxd3FqaW95cGNxZG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzODE1MzksImV4cCI6MjA2Njk1NzUzOX0.hyo42u0L9cV5EWMTvstQxJQfHFq2Ry0U-16_DBaspJc';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(243, 227, 199, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(243, 227, 199, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // CTA button scroll to books section
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const booksSection = document.querySelector('.books-section');
            if (booksSection) {
                const offsetTop = booksSection.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // View Book buttons functionality
    const viewBookButtons = document.querySelectorAll('.view-book-btn');
    
    viewBookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookCard = this.closest('.book-card');
            const bookTitle = bookCard.querySelector('.book-title').textContent.trim();
            handleBookClick(bookTitle);
            
            // You can add modal functionality or redirect to book details page here
            //alert(`Opening details for: ${bookTitle}`);
            
            // Example: Open a modal or redirect
            // showBookModal(bookTitle);
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.book-card, .hero-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Floating elements animation enhancement
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
        // Add random movement to circles
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            
            circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 500);
    });

    // Image hover effects
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.zIndex = '10';
        });
        
        container.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '2';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual) {
            const rate = scrolled * -0.5;
            heroVisual.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Mobile menu toggle (for future mobile menu implementation)
    function createMobileMenu() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelector('.nav-links');
        
        // Create hamburger menu for mobile
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Only show hamburger on mobile
        if (window.innerWidth <= 768) {
            navbar.appendChild(hamburger);
        }
    }

    // Call mobile menu function
    createMobileMenu();

    // Handle window resize
    window.addEventListener('resize', function() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth > 768) {
            if (hamburger) {
                hamburger.remove();
            }
            navLinks.classList.remove('active');
        } else if (window.innerWidth <= 768 && !hamburger) {
            createMobileMenu();
        }
    });

    // Add CSS for mobile menu
    const mobileMenuCSS = `
        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            padding: 10px;
        }
        
        .hamburger span {
            width: 25px;
            height: 3px;
            background-color: #89695D;
            margin: 3px 0;
            transition: 0.3s;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }
            
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: rgba(243, 227, 199, 0.98);
                flex-direction: column;
                padding: 20px;
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .nav-links.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
        }
    `;
    
    // Inject mobile menu CSS
    const style = document.createElement('style');
    style.textContent = mobileMenuCSS;
    document.head.appendChild(style);
});

// Utility function for showing book modal (placeholder)
function showBookModal(bookTitle) {
    // This would be implemented to show a modal with book details
    console.log(`Showing modal for: ${bookTitle}`);
    
    // Example modal implementation:
    /*
    const modal = document.createElement('div');
    modal.className = 'book-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${bookTitle}</h2>
            <p>Book details would go here...</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close').addEventListener('click', () => {
        modal.remove();
    });
    */
}

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Uncomment the line below to enable typing effect
        // typeWriter();
    }

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #34A469, #E3562A);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// Function to handle book click and save to Supabase
async function handleBookClick(bookName) {
    // Check if the book exists
    const { data, error } = await supabaseClient
        .from('ebooks')
        .select('*')
        .eq('name', bookName)
        .single();

    if (error && error.code !== 'PGRST116') {
        // Not a "no rows" error, so log it
        console.error('Supabase error:', error);
        return;
    }

    if (data) {
        // Book exists, increment count
        const { error: updateError } = await supabaseClient
            .from('ebooks')
            .update({ count: data.count + 1 })
            .eq('name', bookName);

        if (updateError) {
            console.error('Update error:', updateError);
        }
    } else {
        // Book does not exist, insert new row with count 1
        const { error: insertError } = await supabaseClient
            .from('ebooks')
            .insert([{ name: bookName, count: 1 }]);

        if (insertError) {
            console.error('Insert error:', insertError);
        }
    }
} 