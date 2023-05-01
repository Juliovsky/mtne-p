<template>
  <Header />
  <Slider />
  <div id="container">
    <AboutUs />
    <Services />
    <Feedbacks />
    <Blog />
    <ContactUs />
  </div>
  <Footer />
</template>

<script setup>
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import AboutUs from "@/components/AboutUs/AboutUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import Blog from "@/components/Blog/Blog";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
</script>
