'use client';
import React, { useState, useRef } from 'react';
import { PRODUCTS, Product } from './common';
import { Nav } from './Nav';
import { FooterDetailed, FooterSimple, BackButton } from './Footer';
import { HomePage } from './HomePage';
import { ProductDetail, ProductDetailAlt } from './Product';
import {
  FaqPage, ContactPage, NoticePage, MyPage, RegisterPage,
  ReviewsPage, CartPage, CheckoutPage, LoginPage, OrderSuccessPage,
  MyReviewsPage, EditProfilePage,
} from './Pages';

interface CartItem extends Product { qty: number }

export default function SodamApp() {
  const [page, setPage] = useState('home');
  const [product, setProduct] = useState<Product>(PRODUCTS[1]);
  const [cart, setCart] = useState<CartItem[]>([{ ...PRODUCTS[1], qty: 1 }]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string | undefined>();
  const [orderTotal, setOrderTotal] = useState<number | undefined>();
  const [loginNext, setLoginNext] = useState<string | null>(null);
  const [reviewsAutoOpen, setReviewsAutoOpen] = useState(false);
  const [directCart, setDirectCart] = useState<CartItem[] | null>(null);
  const historyRef = useRef<string[]>([]);

  function go(p: string, payload?: Product) {
    historyRef.current.push(page);
    if (p === 'product' && payload) setProduct(payload);
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goBack() {
    const prev = historyRef.current.pop();
    if (prev) {
      setPage(prev);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function navToSection(sectionKey: string) {
    if (page !== 'home') {
      historyRef.current.push(page);
      setPage('home');
      setTimeout(() => {
        document.getElementById(`section-${sectionKey}`)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(`section-${sectionKey}`)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function addToCart(p: Product, qty: number) {
    setCart(prev => {
      const existing = prev.find(x => x.id === p.id);
      if (existing) return prev.map(x => x.id === p.id ? { ...x, qty: x.qty + qty } : x);
      return [...prev, { ...p, qty }];
    });
    go('cart');
  }

  function buyNow(p: Product, qty: number, extras: CartItem[] = []) {
    setDirectCart([{ ...p, qty }, ...extras]);
    go('checkout');
  }

  function completeOrder() {
    const items = directCart ?? cart;
    const subtotal = items.reduce((a, x) => a + (x.priceN || 0) * x.qty, 0);
    const ship = subtotal >= 50000 ? 0 : 4000;
    setOrderNumber(`SD-${Date.now().toString().slice(-8)}`);
    setOrderTotal(subtotal + ship);
    if (directCart) { setDirectCart(null); } else { setCart([]); }
    go('success');
  }

  function handleLogin() {
    setLoggedIn(true);
    const next = loginNext || 'home';
    setLoginNext(null);
    go(next);
  }

  function requireLogin(next: string) {
    if (loggedIn) {
      go(next);
    } else {
      setLoginNext(next);
      go('login');
    }
  }

  const cartCount = cart.reduce((a, x) => a + x.qty, 0);

  const slimFooter = ['login', 'register', 'success', 'checkout', 'reviews', 'faq', 'notice'].includes(page);
  const showBack = page !== 'home' && page !== 'login' && page !== 'register';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      <Nav
        go={go}
        active={page}
        cartCount={cartCount}
        onNavSection={navToSection}
      />

      <main style={{ flex: 1 }}>
        {showBack && <BackButton onClick={goBack} />}

        {page === 'home' && (
          <HomePage go={go} onAddToCart={addToCart} />
        )}

        {page === 'product' && (
          <ProductDetail product={product} go={go} onAddToCart={addToCart} onBuyNow={buyNow} onNavSection={navToSection} />
        )}

        {page === 'productB' && (
          <ProductDetailAlt product={product} go={go} onAddToCart={addToCart} onBuyNow={buyNow} />
        )}

        {page === 'cart' && (
          <CartPage
            items={cart}
            onRemove={(i) => setCart(prev => prev.filter((_, idx) => idx !== i))}
            onChangeQty={(i, q) => setCart(prev => prev.map((x, idx) => idx === i ? { ...x, qty: q } : x))}
            go={(p) => {
              if (p === 'checkout') { requireLogin('checkout'); }
              else go(p);
            }}
            onNavSection={navToSection}
          />
        )}

        {page === 'checkout' && (
          <CheckoutPage
            items={directCart ?? cart}
            go={go}
            onComplete={completeOrder}
          />
        )}

        {page === 'login' && (
          <LoginPage
            go={go}
            onLogin={handleLogin}
          />
        )}

        {page === 'register' && (
          <RegisterPage
            go={go}
          />
        )}

        {page === 'success' && (
          <OrderSuccessPage
            orderNumber={orderNumber}
            total={orderTotal}
            go={go}
          />
        )}

        {page === 'faq' && <FaqPage go={go} />}

        {page === 'contact' && <ContactPage go={go} />}

        {page === 'notice' && <NoticePage go={go} />}

        {page === 'mypage' && (
          <MyPage
            go={go}
            onLogout={() => { setLoggedIn(false); go('home'); }}
          />
        )}

        {page === 'myreviews' && <MyReviewsPage go={go} />}

        {page === 'editprofile' && <EditProfilePage go={go} />}

        {page === 'reviews' && (
          <ReviewsPage
            go={go}
            loggedIn={loggedIn}
            autoOpenWrite={reviewsAutoOpen}
            onConsumeAutoOpen={() => setReviewsAutoOpen(false)}
            onRequireLogin={() => requireLogin('reviews')}
          />
        )}
      </main>

      {slimFooter ? <FooterSimple /> : <FooterDetailed go={go} />}
    </div>
  );
}
