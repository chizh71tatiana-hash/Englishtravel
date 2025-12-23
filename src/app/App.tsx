import { Plane, Globe, MapPin, Coffee, Clock, Users, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export default function App() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-400/10 border border-teal-400/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-300">Новый курс — Набор открыт!</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-white max-w-5xl mx-auto leading-tight">
              Английский для <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">путешествий</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, 
              поездках и будущих путешествиях!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button 
                onClick={scrollToRegistration}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Записаться на курс
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <div className="flex items-center gap-2 text-amber-300">
                <Users className="w-5 h-5" />
                <span className="text-sm">Максимум 6 детей в группе</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 sm:py-16 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/20 rounded-full mb-4">
              <span className="text-amber-300">Для кого курс</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-8 rounded-2xl border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl text-white mb-2">Первая группа</h3>
              <p className="text-teal-300">4–5 класс</p>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl text-white mb-2">Вторая группа</h3>
              <p className="text-amber-300">6–8 класс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-teal-400/10 border border-teal-400/20 rounded-full mb-4">
              <span className="text-teal-300">Программа курса</span>
            </div>
            <h2 className="text-3xl sm:text-5xl text-white mt-4">Что будем изучать</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                number: "1",
                icon: <Plane className="w-6 h-6" />,
                title: "Аэропорт без стресса",
                description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
                result: "Уверенность уже в первые часы за границей.",
                gradient: "from-teal-500 to-cyan-500"
              },
              {
                number: "2",
                icon: <Globe className="w-6 h-6" />,
                title: "В отеле: заселение и помощь",
                description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
                result: "Практика вежливых фраз и повседневной лексики.",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                number: "3",
                icon: <Coffee className="w-6 h-6" />,
                title: "Кафе и рестораны",
                description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
                result: "Развитие гастрономического словаря и уверенности в общении.",
                gradient: "from-teal-500 to-cyan-500"
              },
              {
                number: "4",
                icon: <MapPin className="w-6 h-6" />,
                title: "На улице: ориентирование и просьбы",
                description: "Как спросить дорогу, вызвать такси или найти аптеку.",
                result: "Понимание устной речи и произношения в реальных ситуациях.",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                number: "5",
                icon: <Sparkles className="w-6 h-6" />,
                title: "Экстренные случаи",
                description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
                result: "Важные фразы, которые могут спасти отпуск.",
                gradient: "from-teal-500 to-cyan-500"
              },
              {
                number: "6",
                icon: <Globe className="w-6 h-6" />,
                title: "Туризм и развлечения",
                description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
                result: "Погружение в культурный контекст через язык.",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                number: "7",
                icon: <Users className="w-6 h-6" />,
                title: "Дружба в путешествиях",
                description: "Как познакомиться с другими детьми или подростками за границей.",
                result: "Игровая практика диалогов и неформального общения.",
                gradient: "from-teal-500 to-cyan-500"
              },
              {
                number: "8",
                icon: <Sparkles className="w-6 h-6" />,
                title: "Дипломный проект",
                description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
                result: "Развитие связной речи и творческого самовыражения.",
                gradient: "from-amber-500 to-orange-500"
              }
            ].map((module, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-teal-400/40 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-full blur-2xl" 
                     style={{background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}} />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${module.gradient} rounded-xl flex items-center justify-center text-white shrink-0`}>
                      {module.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-500 text-sm mb-1">Модуль {module.number}</div>
                      <h3 className="text-xl text-white">{module.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{module.description}</p>
                  
                  <div className="flex items-start gap-2 text-teal-300">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                    <p className="text-sm">{module.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Special */}
      <section className="py-12 sm:py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/20 rounded-full mb-4">
              <span className="text-amber-300">Преимущества</span>
            </div>
            <h2 className="text-3xl sm:text-5xl text-white mt-4">Почему этот курс особенный?</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "💬",
                title: "Живая речь",
                description: "Акцент на практическую, живую речь, а не на грамматику ради грамматики"
              },
              {
                emoji: "🌍",
                title: "Реальные ситуации",
                description: "Все ситуации — из реальной жизни путешественника"
              },
              {
                emoji: "🎮",
                title: "Интерактив",
                description: "Ролевые игры, аудиоситуации, мини-квесты"
              },
              {
                emoji: "📈",
                title: "Результат A2–B1",
                description: "Ребёнок выходит на уровень Pre-Intermediate за курс"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-6 rounded-2xl border border-slate-700/50 hover:border-amber-400/40 transition-all duration-300 text-center backdrop-blur-sm"
              >
                <div className="text-5xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-8 sm:p-12 rounded-3xl border border-teal-400/20 backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-teal-400/10 border border-teal-400/20 rounded-full mb-4">
                <span className="text-teal-300">Технические требования</span>
              </div>
              <h2 className="text-3xl sm:text-4xl text-white">Что потребуется</h2>
            </div>
            
            <div className="space-y-4">
              {[
                "Стационарный компьютер или ноутбук с наушниками и микрофоном",
                "Стабильный интернет и Zoom"
              ].map((req, index) => (
                <div key={index} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule and Pricing */}
      <section className="py-12 sm:py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Schedule */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-8 rounded-2xl border border-teal-400/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-white">Расписание</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-teal-400/10">
                  <div className="text-teal-300 mb-1">Группа 4–5 класс</div>
                  <div className="text-white">Четверг, 15:00 (МСК)</div>
                </div>
                
                <div className="p-4 bg-slate-900/50 rounded-xl border border-amber-400/10">
                  <div className="text-amber-300 mb-1">Группа 6–8 класс</div>
                  <div className="text-white">Пятница, 15:30 (МСК)</div>
                </div>
              </div>
            </div>
            
            {/* Pricing */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-8 rounded-2xl border border-amber-400/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-2xl text-white">Стоимость</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-amber-400/10">
                  <div className="text-amber-300 mb-1">Полный курс</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-white">12 000 руб</span>
                    <span className="text-slate-400">/ 10 уроков</span>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-900/50 rounded-xl border border-teal-400/10">
                  <div className="text-teal-300 mb-1">Абонемент</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-white">1 300 руб</span>
                    <span className="text-slate-400">/ урок</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="registration" className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-amber-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-8 sm:p-12 rounded-3xl border border-teal-400/20 backdrop-blur-sm">
            <div className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/20 rounded-full mb-6">
              <span className="text-amber-300">Набор открыт!</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl text-white mb-6">
              Начните путешествие с <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">уверенностью</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-4">
              Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
            </p>
            
            <p className="text-amber-300 mb-8">
              Места ограничены!
            </p>
            
            <button 
              onClick={() => alert('Функция записи будет реализована при подключении формы обратной связи. Свяжитесь с организаторами курса для записи.')}
              className="group relative px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white text-lg rounded-xl transition-all duration-300 shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                Записаться на курс
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <p className="text-slate-400 text-sm mt-8">
              Следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-500 text-sm">
            <p>© 2024 Курс «Английский для путешествий». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
