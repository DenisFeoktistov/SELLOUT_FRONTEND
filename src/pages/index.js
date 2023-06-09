import { Header } from "@/modules/Header";
import { Home } from "@/modules/Home";
import { MainLayout } from "@/shared/layouts/MainLayout";
import Head from "next/head";
import Image from "next/image";

export default function HomePage() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
