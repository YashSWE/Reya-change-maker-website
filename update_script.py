import re

with open("website-design.md", "r") as f:
    html = f.read()

# 1. Update Roadmap Day 1
html = html.replace('>Ideation</h3>', '>Ideation &amp; Design Thinking</h3>')

# 2. Update Facilitator Info
old_facilitator = """<p class="font-bold text-primary">Communications Intern &amp; WICCI Council Lead</p>
<p>
                        A dedicated change-maker with a profound passion for entrepreneurship and social impact. Reya has mentored numerous youth in developing effective communication and leadership skills.
                    </p>
<p>
                        Through this workshop, she brings her experience as a council lead to help young students bridge the gap between ideation and real-world execution.
                    </p>"""
new_facilitator = """<p class="font-bold text-primary">Grade 11 Student &amp; WICCI Council Lead</p>
<p>
                        A passionate business student at Chirec with a keen interest in entrepreneurship, having pitched her idea at the Indian School of Business. Reya is also the Communications &amp; Events Intern at Beyond the Box.
                    </p>
<p>
                        With internships at Ariko Cafe, Lulu Mall, and Gachibowli Stadium, and a role in the marketing OC at Chirec TEDx, she brings real-world experience to help young students turn passion into purpose.
                    </p>"""
html = html.replace(old_facilitator, new_facilitator)

html = html.replace('Mentored 200+ Students', 'Pitched at ISB')

# 3. Update Topics
old_topics = """<li class="flex items-center gap-4">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xl font-light">Sustainable Development Goals (SDGs)</span>
</li>
<li class="flex items-center gap-4">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xl font-light">Community Leadership</span>
</li>
<li class="flex items-center gap-4">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xl font-light">Ethics in Innovation</span>
</li>
<li class="flex items-center gap-4">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xl font-light">Resource Optimization</span>
</li>
<li class="flex items-center gap-4">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xl font-light">Social Entrepreneurship</span>
</li>"""
new_topics = """<li class="flex items-center gap-4">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xl font-light">Help growing entrepreneurs go digital</span>
</li>
<li class="flex items-center gap-4">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xl font-light">Conduct musical events in underserved schools</span>
</li>
<li class="flex items-center gap-4">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xl font-light">Start a "Respect for Workers" Campaign</span>
</li>
<li class="flex items-center gap-4">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xl font-light">Design educational flashcards for underprivileged students</span>
</li>
<li class="flex items-center gap-4">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-xl font-light">Grow awareness on E-waste management</span>
</li>"""
html = html.replace(old_topics, new_topics)

# 4. Dates & Times
html = html.replace('15 - 24 April</p>', '15 - 24 April (Tentative)</p>')
html = html.replace('4:00 - 5:00 PM IST</p>', '4:00 - 5:00 PM (Tentative)</p>')

# 5. Buttons -> Links
old_nav_btn = '<button class="bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-headline font-bold hover:opacity-90 transition-all duration-200 scale-95 active:scale-90">Register Now</button>'
new_nav_btn = '<a href="https://forms.gle/NZo4Rd5frCsfnNfT6" target="_blank" class="inline-block bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-headline font-bold hover:opacity-90 transition-all duration-200 scale-95 active:scale-90">Register Now</a>'
html = html.replace(old_nav_btn, new_nav_btn)

old_hero_btn = '<button class="px-8 py-4 bg-secondary text-on-secondary rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-secondary/20">Register Now</button>'
new_hero_btn = '<a href="https://forms.gle/NZo4Rd5frCsfnNfT6" target="_blank" class="inline-block px-8 py-4 bg-secondary text-on-secondary rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-secondary/20">Register Now</a>'
html = html.replace(old_hero_btn, new_hero_btn)

old_footer_btn = """<button class="w-full py-5 bg-secondary text-on-secondary rounded-2xl font-headline font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-secondary/30 mb-4">
                            Register Now
                        </button>"""
new_footer_btn = """<a href="https://forms.gle/NZo4Rd5frCsfnNfT6" target="_blank" class="block text-center w-full py-5 bg-secondary text-on-secondary rounded-2xl font-headline font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-secondary/30 mb-4">
                            Register Now
                        </a>"""
html = html.replace(old_footer_btn, new_footer_btn)

# 6. Contacts
old_contacts = """<p class="flex items-center gap-3">
<span class="material-symbols-outlined text-sm">phone</span>
                            +91 XXXXXXXXXX
                        </p>
<p class="flex items-center gap-3">
<span class="material-symbols-outlined text-sm">mail</span>
                            hello@changemakerworkshop.com
                        </p>
<p class="flex items-center gap-3">
<span class="material-symbols-outlined text-sm">account_balance_wallet</span>
                            GPay: XXXXXXXXXX
                        </p>"""
new_contacts = """<p class="flex items-center gap-3">
<span class="material-symbols-outlined text-sm">phone</span>
                            +91 8074897448
                        </p>
<p class="flex items-center gap-3">
<span class="material-symbols-outlined text-sm">mail</span>
                            reyajain2711@gmail.com
                        </p>
<p class="flex items-center gap-3">
<span class="material-symbols-outlined text-sm">account_balance_wallet</span>
                            GPay: 9642055522
                        </p>"""
html = html.replace(old_contacts, new_contacts)


with open("updated-website.md", "w") as f:
    f.write(html)
