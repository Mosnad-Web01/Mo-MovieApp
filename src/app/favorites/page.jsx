"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Link from "next/link";

const FavoriteList = dynamic(() => import("../../components/FavoriteList"), { ssr: false });

export default function FavoritesPage() {
  return (
      <FavoriteList />
  );
}
