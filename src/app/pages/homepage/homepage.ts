import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Herosection } from "../../components/herosection/herosection";
import { Aboutsection } from "../../components/aboutsection/aboutsection";
import { Teamsection } from "../../components/teamsection/teamsection";
import { Choosesection } from "../../components/choosesection/choosesection";
import { Faqsection } from "../../components/faqsection/faqsection";
import { Blogsection } from "../../components/blogsection/blogsection";
import { Testimonialsection } from "../../components/testimonialsection/testimonialsection";
import { Contactsection } from "../../components/contactsection/contactsection";
import { Footer } from "../../shared/footer/footer";

@Component({
  selector: 'app-homepage',
  imports: [Header, Herosection, Aboutsection, Teamsection, Choosesection, Faqsection, Blogsection, Testimonialsection, Contactsection, Footer],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
