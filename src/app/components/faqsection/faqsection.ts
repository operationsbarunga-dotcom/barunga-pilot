import { Component } from '@angular/core';

interface faq {
  question: string,
  answer: string,
  isopen?: boolean
}

@Component({
  selector: 'app-faqsection',
  imports: [],
  templateUrl: './faqsection.html',
  styleUrl: './faqsection.css',
})
export class Faqsection {


  faqs: faq[] = [
    {
      question: 'Where is Barunga Industries located ?',
      answer: 'Barunga Industries is located in Thiruvananthapuram (Trivandrum) and serves customers across the city and nearby areas.'
    }, {
      question: 'What type of furniture do you specialize in ?',
      answer: 'We specialize in customized furniture for homes, offices, and commercial spaces, designed to match your space, style, and functional needs.'
    },
    {
      question: 'Do you provide custom-made furniture in Trivandrum ?',
      answer: 'Yes, we are known for offering the best customized furniture in Trivandrum, tailored to exact measurements and design preferences.'
    },
    {
      question: 'How does the customized furniture process work ?',
      answer: 'Our process includes requirement discussion, design finalization, material selection, manufacturing, and professional delivery and installation.'
    },
    {
      question: 'Can I visit your showroom or factory in Trivandrum ?',
      answer: 'Yes, customers are welcome to visit our location in Trivandrum to view materials, finishes, and discuss designs with our team.'
    },
    {
      question: 'What materials are used for customized furniture ?',
      answer: 'We use high-quality materials such as solid wood, plywood, MDF, laminates, veneers, and premium hardware to ensure durability and finish.'
    },

    {
      question: 'How long does it take to complete a customized furniture order ?',
      answer: 'The timeline depends on design complexity and size. Most customised furniture orders are completed within a few weeks after design approval.'
    },
    {
      question: 'Do you offer delivery and installation in Trivandrum ?',
      answer: 'Yes, we provide delivery and installation services across Thiruvananthapuram and nearby areas.'
    },
    {
      question: 'Is customized furniture more expensive than ready-made furniture ?',
      answer: 'Customized furniture offers better space utilization, quality, and durability. Pricing depends on materials, design, and size, and we ensure competitive pricing.'
    },
    {
      question: 'Do you offer after-sales support or warranty ?',
      answer: 'Yes, Barunga Industries provides after-sales support and warranty options, depending on the product and materials used.'
    },
  ]


  toggleFaq(faq: faq) {
    faq.isopen = !faq.isopen
  }

}
