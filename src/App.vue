<template>
  <Header />
  <Slider />
  <div id="container" class="container">
    <MainInfo />
    <AboutUs />
    <!--    <Services />-->
    <!--    <ContactUs />-->
    <!--    <Feedbacks />-->
    <!--    <Blog />-->
  </div>
</template>

<script setup>
import Header from "@/components/Header/Header";
import "vueperslides/dist/vueperslides.css";
import Services from "@/components/Services/Services";
import AboutUs from "@/components/AboutUs/AboutUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import Blog from "@/components/Blog/Blog";
import Slider from "@/components/Slider";
import MainInfo from "@/components/MainInfo";
</script>