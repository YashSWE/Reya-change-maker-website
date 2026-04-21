import React from "react";

export function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-stone-900 w-full py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <h3 className="font-headline font-bold text-stone-900 dark:text-stone-50 text-2xl">The Young Change-Maker Workshop</h3>
            <div className="space-y-2 font-body text-sm tracking-wide text-stone-500">
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">phone</span>
                +91 8074897448
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">mail</span>
                reyajain2711@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                GPay: 9642055522
              </p>
            </div>
          </div>
        </div>

        <div className="bg-stone-200/50 dark:bg-stone-800/50 h-px mb-8"></div>
        <p className="font-body text-sm tracking-wide text-stone-500">© {new Date().getFullYear()} The Young Change-Maker Workshop. Empowering the next generation of leaders.</p>
      </div>
    </footer>
  );
}
