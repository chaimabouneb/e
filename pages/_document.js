"use client";
import React, { useContext, useState, useEffect } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Layout from "../components/Layout";
export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
