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
                <p className="text-lg text-gray-500 mb-5">See out software in action with the demo version</p>
                <div className="flex flex-wrap mb-6 items-center -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                    <a className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-400 transition duration-100" href="#">
                      <img className="w-5 h-5 mr-3" src="src/images/facebook-app-symbol.png" alt=""/>
                      <span className="ml-4 text-sm font-semibold text-gray-500">Login with Facebook</span>
                    </a>
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <a className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-400 transition duration-100" href="#">
                      <img className="w-5 h-5 mr-3" src="src/images/apple-logo.png" alt=""/>
                      <span className="ml-4 text-sm font-semibold text-gray-500">Login with Apple</span>
                    </a>
                  </div>
                </div>
                <div className="flex mb-6 items-center">
                  <div className="w-full h-px bg-gray-300"></div>
                  <span className="mx-4 text-sm font-semibold text-gray-500">Or</span>
                  <div className="w-full h-px bg-gray-300"></div>
                </div>
                <form action="#">
                  <div className="mb-6">
                    <label className="block mb-1.5 text-sm text-gray-900 font-semibold" for="">Email</label>
                    <input className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="email" placeholder="cambodiaairway@yahoo.com"></input>
                  </div>
                  <div className="mb-7">
                    <div className="relative">
                    <input className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple-500 rounded-lg" type="password" placeholder="Enter your password"></input>
                    <button className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                      <img className="w-5 h-5" src="src/images/eye.png" alt="" />
                    </button>
                    </div>
                  </div>
                  <div className="flex mb-6 items-center">
                    <input type="checkbox" value="" id=""/>
                    <label className="ml-2 text-xs text-gray-800" for="">Remember for 30 days</label>
                  </div>
                  <button className="relative group block w-full mb-32 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-500 rounded-full overflow-hidden" type="submit">
                    <div className="absolute top-0 right-full w-full h-full bg-gray-800 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">Login</span>
                  </button>
                  <div className="text-center">
                    <span className="text-xs font-semibold text-gray-900">
                      <span>Dont have account?</span>
                      <a className="inline-block ml-1 text-orange-500 hover:text-orange-700" href="#">Sign up</a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}