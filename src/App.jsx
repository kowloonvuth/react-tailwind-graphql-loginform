import React from "react";
import "./index.css";

export default function App(){
  return(
   <section className="relative py-20 2xl:py-10 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap mx-4">
            <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
              <div className="relative max-w-lg mx-auto lg:mx-0 lg:max-w-2xl h-full">
                <img className='block w-full h-142 sm:h-full object-cover rounded-5xl' src='src/images/background.jpg' alt=""/>
                <div className="absolute bottom-0 w-full left-0 h-full flex items-center justify-center p-10">
                  <div className="max-w-md mx-auto">
                    <h4 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white font-bold mb-8">Sign in to you account</h4>
                    <div className="md:flex mb-20">
                      <div className="mb-6 md:mb-0 md:mr-8 pt-3 text-gray-600">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z" fill="#FAFBFC"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-200">Greeting on your return! We kindly request you to enter your details.</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex mr-4 items-center">
                        <img className="w-10 h-10 rounded-full" src='src/images/sign-up/person1.jpg' alt=""/>
                        <img className="w-10 h-10 -ml-3 rounded-full" src='src/images/sign-up/person2.jpg' alt=""/>
                        <img className="w-10 h-10 -ml-3 rounded-full" src='src/images/sign-up/person3.jpg' alt=""/>
                        <img className="w-10 h-10 -ml-3 rounded-full" src='src/images/sign-up/person4.jpg' alt=""/>
                        <div className="flex -ml-3 items-center justify-center w-10 h-10 border-2 border-gray-900 bg-gray-50 rounded-full">
                          <span className="text-gray-900 font-medium">+5</span>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="flex items-center">
                            <img className="mr-1 w-5 h-5 mb-1" src='src/images/star.png' alt=""/>
                            <img className="mr-1 w-5 h-5 mb-1" src='src/images/star.png' alt=""/>
                            <img className="mr-1 w-5 h-5 mb-1" src='src/images/star.png' alt=""/>
                            <img className="mr-1 w-5 h-5 mb-1" src='src/images/star.png' alt=""/>
                            <img className="mr-1 w-5 h-5 mb-1" src='src/images/star.png' alt=""/>
                            <span className="font-semibold text-gray-50">5.0</span>
                          </div>
                        </div>
                        <span className="font-semibold text-gray-50">from 200+ reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="max-w-lg lg:pt-8 2xl:pt-24 lg:pb-8 mx-auto 2xl:mr-0">
                <h3 className="text-5xl sm:text-6xl text-gray-900 font-bold mb-4">Welcome Back</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}