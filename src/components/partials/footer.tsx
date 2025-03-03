import { Instagram, Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-2">Telefon</h3>
            <p>+998 90 168 22 72</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Адрес</h3>
            <p>Dubai, United Arab Emirates</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Электронная почта</h3>
            <p>contact@mtoursdubai.com</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Social media</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-yellow-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-gray-600 hover:text-yellow-500">
              Bosh sahifa
            </a>
            <a href="#" className="text-gray-600 hover:text-yellow-500">
              Biz haqimizda
            </a>
            <a href="#" className="text-gray-600 hover:text-yellow-500">
              Xizmatlar
            </a>
            <a href="#" className="text-gray-600 hover:text-yellow-500">
              MyGroup bron qilish
            </a>
            <a href="#" className="text-gray-600 hover:text-yellow-500">
              Foydalanuvchilar fikrlari
            </a>
            <a href="#" className="text-gray-600 hover:text-yellow-500">
              Aloqa
            </a>
          </div>

          <div className="text-right text-gray-500 text-sm">
            <p>© 2025 M Tours. Barcha huquqlar himoyalangan.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

