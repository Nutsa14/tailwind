import './App.css';
import React, { useState } from 'react';

function App() {

  // 🧠 გახსოვს? როდესაც ხატავ და ფანქარს ირჩევ —
  // კომპიუტერიც ასე "ახსოვს" რომელი ღილაკი აირჩიე.
  // selectedRating = რომელ ციფრს დააჭირე (1,2,3,4 ან 5)
  // null ნიშნავს "ჯერ არაფერი არ აურჩევია"
  const [selectedRating, setSelectedRating] = useState(null);

  // 🧠 isSubmitted = "დააჭირა თუ არა Submit-ს?"
  // false = ჯერ არ დაუჭირავს, true = უკვე დააჭირა
  const [isSubmitted, setIsSubmitted] = useState(false);

  // უბრალოდ სია — [1, 2, 3, 4, 5]
  const ratings = [1, 2, 3, 4, 5];


  const handleSubmit = (e) => {
    // ეს ხელს უშლის გვერდის გადატვირთვას (ფორმების ნაგულისხმევი ქცევა)
    e.preventDefault();
    
    // 🧠 თუ რაიმე ციფრი არჩეულია (არა null), მაშინ გადავდივართ "მადლობის" ეკრანზე.
    // წარმოიდგინე — თუ ფანქარი აიღე, ხატვა შეგიძლია.
    // თუ არ აიღე, ვერ ხატავ 🖍️
    if (selectedRating) {
      setIsSubmitted(true);
    }
  };


  const getRatingBtnClass = (num) => {

    // 🎨 ეს არის ღილაკის "ძირითადი სახე" — ყოველთვის ერთნაირია
    // ზომა, მრგვალი ფორმა, ტექსტის სტილი და ა.შ.
    const base = [
      "w-12 h-12",
      "md:w-14 md:h-14",
      "rounded-full",
      "flex items-center justify-center",
      "transition-all duration-300",
      "font-bold text-base",
    ].join(" ");

    // 🟠 როდესაც ამ ღილაკს დააჭერ — ის ნაცრისფერი ხდება
    // (ნიშნავს "ეს ავარჩიე!")
    const selected = "bg-[#7c8798] text-white";

    // ⚫ როდესაც ამ ღილაკს არ დააჭერ — მუქი და ნაცრისფერი ტექსტი
    // hover-ზე კი ნარინჯისფერი ხდება
    const unselected = "bg-[#262e38] text-[#969fad] hover:bg-[#fb7413] hover:text-white";

    // 🧠 ეს კითხვაა: "ეს ღილაკი (num) ისაა, რომელიც ავარჩიე (selectedRating)?"
    // თუ კი  → selected სტილი (ნაცრისფერი)
    // თუ არა → unselected სტილი (მუქი, hover-ზე ნარინჯი)
    return `${base} ${selectedRating === num ? selected : unselected}`;
  };


  const getSubmitClass = () => {

    // 🎨 Submit ღილაკის "ძირითადი სახე" — ყოველთვის ერთნაირია
    const base = [
      "w-full py-3",
      "rounded-full",
      "font-bold uppercase tracking-widest",
      "transition-all duration-300",
      "bg-[#fb7413] text-white",
    ].join(" ");

    // ✅ თუ ციფრი არჩეულია — ღილაკი "ცოცხალია"
    // hover-ზე თეთრი ხდება, cursor ჩვეულებრივი ისარია
    const active = "hover:bg-white hover:text-[#fb7413] cursor-pointer";

    // 🚫 თუ ციფრი არ არის არჩეული — ღილაკი "მკვდარია"
    // გამჭვირვალე (opacity 50%) და მაუსი "აკრძალვის" ნიშანს აჩვენებს
    const disabled = "opacity-50 cursor-not-allowed";

    // 🧠 კითხვა: "არჩეულია რაიმე ციფრი?"
    // თუ კი  → active  (შეიძლება დაჭერა)
    // თუ არა → disabled (ჯერ ვერ დააჭერ)
    return `${base} ${selectedRating ? active : disabled}`;
  };


  return (
    <main className="flex items-center justify-center min-h-screen bg-[#131518] px-4 font-sans">

      {/* 🧠 ეს კითხვაა: "დააჭირა თუ არა Submit-ს?"
          თუ არა (false) → Rating ბარათს ვაჩვენებთ
          თუ კი  (true)  → Thank You ბარათს ვაჩვენებთ
          წარმოიდგინე შუქნიშანი — წითელი/მწვანე 🚦 */}
      {!isSubmitted ? (

        <div className="bg-[#1e252f] p-8 rounded-[30px] w-full max-w-[400px] shadow-2xl">

          <div className="bg-[#262e38] w-12 h-12 rounded-full flex items-center justify-center mb-8">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .428 1.316l-3.22 3.138a.633.633 0 0 0-.184.57l.76 4.432a.772.772 0 0 1-1.119.813l-3.98-2.092a.63.63 0 0 0-.586 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.432a.633.633 0 0 0-.184-.57l-3.22-3.138a.772.772 0 0 1 .428-1.316l4.45-.647c.25-.036.468-.194.58-.422L6.933.43a.772.772 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </div>

          <h1 className="text-white text-3xl font-bold mb-4">How did we do?</h1>

          <p className="text-[#969fad] text-[15px] leading-relaxed mb-8">
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
          </p>

          <div className="flex justify-between mb-8">
            {/* 🧠 ratings = [1,2,3,4,5]
                .map() ნიშნავს — "თითოეული ციფრისთვის გააკეთე ღილაკი"
                წარმოიდგინე — 5 ცარიელი კვერცხის ყუთი და თითოეულში ერთი კვერცხი ჩადე 🥚🥚🥚🥚🥚 */}
            {ratings.map((num) => (
              <button
                key={num}
                type="button"
                // 🧠 დაჭერისას setSelectedRating-ს ვეუბნებით "დაიმახსოვრე ეს ციფრი"
                onClick={() => setSelectedRating(num)}
                className={getRatingBtnClass(num)}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            // 🧠 !selectedRating = "არ არის არჩეული?"
            // თუ კი → disabled=true  (ღილაკი გათიშულია)
            // თუ არა → disabled=false (ღილაკი ჩართულია)
            disabled={!selectedRating}
            className={getSubmitClass()}
          >
            Submit
          </button>
        </div>

      ) : (

        <div className="bg-[#1e252f] p-10 rounded-[30px] w-full max-w-[400px] text-center shadow-2xl flex flex-col items-center">

          <img
            src="https://raw.githubusercontent.com/t-p-v/interactive-rating-component/main/images/illustration-thank-you.svg"
            alt="Thank you"
            className="mb-8"
          />

          <div className="bg-[#262e38] px-4 py-1.5 rounded-full mb-8">
            {/* 🧠 selectedRating-ში ახსოვს რომელი ციფრი აირჩია
                იმას პირდაპირ ვაჩვენებთ ტექსტში */}
            <p className="text-[#fb7413] text-[15px]">
              You selected {selectedRating} out of 5
            </p>
          </div>

          <h2 className="text-white text-3xl font-bold mb-4">Thank you!</h2>

          <p className="text-[#969fad] text-[15px] leading-relaxed">
            We appreciate you taking the time to give a rating. If you ever need more support,
            don't hesitate to get in touch!
          </p>
        </div>
      )}
    </main>
  );
}

export default App;