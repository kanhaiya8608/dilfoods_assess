'use client'
import React from 'react';
import Link from 'next/link';
import {useSelector} from 'react-redux'
const Navbar = () => {
  const item=useSelector((state=>state.cart))
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/product">Products</Link>
        </li>
        <li>
          <Link href="/cart">Cart{item.length}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
