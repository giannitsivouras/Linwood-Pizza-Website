import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            {/* 🍽️ Restaurant Hero Section */}
            <h1 className={styles.hero}>Welcome to Gourmet Delights</h1>
            <p>Experience the finest flavors and handcrafted dishes made with passion.</p>
            
            {/* Call-to-Action Button */}
            <button className={styles.ctaButton}>View Menu</button>

            {/* 🌟 Restaurant Highlights */}
            <div className={styles.section}>
                <h2>Why Dine With Us?</h2>
                <ul className={styles.list}>
                    <li>🍷 Elegant Ambiance & Fine Dining</li>
                    <li>👨‍🍳 World-Class Chefs & Authentic Recipes</li>
                    <li>🌿 Fresh & Organic Ingredients</li>
                </ul>
            </div>

            {/* 📍 Footer with Contact Details */}
            <footer className={styles.footer}>
                <p>📍 123 Main Street, Foodville | 📞 (123) 456-7890</p>
                <p>© 2025 Gourmet Delights | Crafted with ❤️</p>
            </footer>
        </div>
    );
}