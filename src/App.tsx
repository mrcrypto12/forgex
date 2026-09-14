import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/lib/theme-provider"
import { AppLayout } from "@/components/layout/AppLayout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Industries from "@/pages/Industries"
import Products from "@/pages/Products"
import Docta from "@/pages/products/Docta"
import UniGuide from "@/pages/products/UniGuide"
import Careers from "@/pages/Careers"
import Terms from "@/pages/Terms"
import Privacy from "@/pages/Privacy"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="forgex-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/docta" element={<Docta />} />
            <Route path="/products/uniguide" element={<UniGuide />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App