<!-- Portfolio Home -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>THE ETHEREAL GALLERY | Digital Artist &amp; Animator</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-dim": "#644b2e",
              "error-container": "#f95630",
              "on-surface-variant": "#5b5c5a",
              "surface-container-highest": "#ddddd9",
              "on-secondary-fixed-variant": "#5c5b5b",
              "outline-variant": "#adadab",
              "inverse-surface": "#0d0f0d",
              "on-secondary": "#f4f2f2",
              "secondary-fixed-dim": "#d6d4d4",
              "secondary": "#5c5b5b",
              "surface-tint": "#964300",
              "inverse-on-surface": "#9d9d9a",
              "on-secondary-container": "#525252",
              "on-tertiary-fixed-variant": "#6b5134",
              "error-dim": "#b92902",
              "on-primary-fixed": "#100300",
              "on-error-container": "#520c00",
              "secondary-fixed": "#e4e2e2",
              "surface-variant": "#ddddd9",
              "primary": "#964300",
              "surface-container-high": "#e3e3df",
              "secondary-container": "#e4e2e2",
              "on-secondary-fixed": "#3f3f3f",
              "primary-fixed": "#f9873e",
              "background": "#f7f6f3",
              "surface-container": "#e8e8e5",
              "on-tertiary-fixed": "#4c361b",
              "on-surface": "#2e2f2d",
              "surface-container-low": "#f1f1ee",
              "secondary-dim": "#504f4f",
              "primary-container": "#f9873e",
              "on-tertiary-container": "#60482c",
              "primary-fixed-dim": "#e97b32",
              "surface-container-lowest": "#ffffff",
              "on-primary-fixed-variant": "#542200",
              "error": "#b02500",
              "on-background": "#2e2f2d",
              "surface-dim": "#d4d5d1",
              "tertiary-fixed-dim": "#e9c6a1",
              "on-primary-container": "#451b00",
              "tertiary-fixed": "#f8d4ae",
              "surface-bright": "#f7f6f3",
              "on-primary": "#fff0e9",
              "surface": "#f7f6f3",
              "on-tertiary": "#fff0e3",
              "on-error": "#ffefec",
              "primary-dim": "#843a00",
              "outline": "#767775",
              "tertiary": "#705739",
              "inverse-primary": "#f9873e",
              "tertiary-container": "#f8d4ae"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Manrope"],
              "label": ["Manrope"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .tonal-transition {
            transition: background-color 0.5s ease;
        }
        .no-line { border: none !important; }
        .glass-nav {
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-900/80 glass-nav">
<div class="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
<span class="text-xl font-bold tracking-tighter text-orange-950 dark:text-stone-50 font-headline">THE ETHEREAL GALLERY</span>
<div class="hidden md:flex items-center gap-8">
<a class="font-headline text-sm uppercase tracking-widest text-orange-600 dark:text-orange-400 font-bold border-b-2 border-orange-500 pb-1" href="#">Portfolio</a>
<a class="font-headline text-sm uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-orange-500 transition-colors" href="#">Commissions</a>
<a class="font-headline text-sm uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-orange-500 transition-colors" href="#">Contact</a>
</div>
<div class="flex items-center gap-4">
<button class="hover:scale-105 transition-transform duration-300 scale-95 active:duration-100">
<span class="material-symbols-outlined text-stone-600 dark:text-stone-400" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</nav>
<!-- SideNavBar (Social Orbit) -->
<aside class="fixed left-4 top-1/2 -translate-y-1/2 rounded-full py-4 bg-stone-100/50 dark:bg-stone-800/50 glass-nav shadow-xl shadow-orange-900/5 z-40 hidden lg:block">
<div class="flex flex-col items-center gap-4 px-2">
<div class="mb-2 text-center">
<div class="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden mb-1">
<img alt="Artist Profile Avatar" class="w-full h-full object-cover" data-alt="Professional artist headshot with soft studio lighting and a warm orange background tint" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGTs7nZRqw0zh8PTzkoePSCNGSh5e-lF1iTzhzFxepeWuzRffplblyPVQsgmOeGKsMDTD8AwFY5JrySQ8aOM69wE6B6OQ2HDM3X6b2ZcydGT0IarMCkDw5xzgNwOpu8pq3oQgRWTgH7hB9q2O1IzmAB4MJzzaVSwOYEA6n_l3Tnop8AYL7LeHMyMmP0iN2iUbrl28toYNhSfK403xQiwhQhROrlcwoOSlgaMZHZJIjokUl_JGGvrWIvYpmjMgvijfQ-kJp45e1Ugc"/>
</div>
</div>
<a class="text-stone-500 dark:text-stone-400 p-3 transition-all hover:translate-x-1 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-full" href="#" title="Twitch">
<span class="material-symbols-outlined" data-icon="live_tv">live_tv</span>
</a>
<a class="text-stone-500 dark:text-stone-400 p-3 transition-all hover:translate-x-1 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-full" href="#" title="YouTube">
<span class="material-symbols-outlined" data-icon="play_circle">play_circle</span>
</a>
<a class="text-stone-500 dark:text-stone-400 p-3 transition-all hover:translate-x-1 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-full" href="#" title="TikTok">
<span class="material-symbols-outlined" data-icon="music_note">music_note</span>
</a>
<a class="text-stone-500 dark:text-stone-400 p-3 transition-all hover:translate-x-1 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-full" href="#" title="Twitter">
<span class="material-symbols-outlined" data-icon="chat">chat</span>
</a>
</div>
</aside>
<main class="pt-24">
<!-- Hero Section -->
<section class="px-8 py-20 lg:py-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 overflow-hidden">
<div class="flex-1 space-y-8 z-10">
<div class="space-y-2">
<span class="text-primary font-headline font-bold tracking-widest uppercase text-sm">Digital Artist &amp; Animator</span>
<h1 class="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-none text-on-surface">
                        LUCIEN <br/> <span class="text-primary-fixed">VANCE.</span>
</h1>
</div>
<p class="text-on-surface-variant text-xl leading-relaxed max-w-xl font-body">
                    Crafting ethereal digital experiences through high-fidelity illustration and fluid motion. Specializing in character design and immersive atmospheric animations.
                </p>
<div class="flex gap-4">
<button class="px-8 py-4 bg-primary text-on-primary rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20">
                        View Portfolio
                    </button>
<button class="px-8 py-4 border border-outline-variant/15 text-primary rounded-full font-bold hover:bg-surface-container-low transition-colors">
                        Inquire
                    </button>
</div>
</div>
<div class="flex-1 relative">
<div class="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
<img alt="Hero artwork" class="w-full h-full object-cover" data-alt="Stunning digital painting of a futuristic ethereal character with glowing orange hair and intricate metallic details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmPZcZfH1bpY-FKWxtwX2jXwccUz6qhrm4lgAGMrAXf8r7YPa6NIReghIBxXkXeOV1642J5P4pq4YzibWLuxmUudio9m2d1p7-BhgL9mueSOecdx357BW_twemMhbCxdBd6V5d01Dq7T9-d4BBiJdfXs2xGtylj6Om2D_0pKkoALo0MO2-IhPm-4cx62oJEXtfzJw7kyzgaKcNGTaSGldgVKz88kD5qbeA8HaRjqtL_1mf9JLkm3WFB4AMzkEwPt6K9vXk2ektmZQ"/>
</div>
<div class="absolute -bottom-8 -left-8 w-48 h-48 rounded-xl overflow-hidden shadow-2xl -rotate-6 hidden lg:block">
<img alt="Secondary detail" class="w-full h-full object-cover" data-alt="Abstract colorful light waves with fluid motion and soft orange and purple hues" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtrQelto1Q7Tmv8_s8hkO9J60REz6VdKoNZ2_zt3AMZEKIGhdMzrdoK7mpvDN3XnhRDtcy2JBPOQ4DdkG7NDaTHYvYnSCWGSsvkGNNOtR4GF0jcf7vlAmJlNiJCxVBHMLxwR-dIVo3naC64vj3AY5rJIwqk2awcI96eLd2VcwxPQRYWsdEsjK82yluCFPJfeo87e3nLlrVnQdOsZpbfCuiEK4J7rKCKywaHvCnaX1TxQUPN6IzeUX1PSanWA1oJQnaZAms0rqQp2E"/>
</div>
</div>
</section>
<!-- Portfolio Gallery -->
<section class="py-24 bg-surface-container-low tonal-transition">
<div class="max-w-7xl mx-auto px-8">
<div class="flex justify-between items-end mb-16">
<div class="space-y-4">
<h2 class="text-4xl md:text-5xl font-headline font-bold tracking-tight">The Gallery</h2>
<div class="flex gap-4">
<button class="px-4 py-1 bg-surface-container-lowest rounded-full text-xs font-bold text-primary">ALL</button>
<button class="px-4 py-1 hover:bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant transition-colors">ARTWORK</button>
<button class="px-4 py-1 hover:bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant transition-colors">EMOTES</button>
<button class="px-4 py-1 hover:bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant transition-colors">ANIMATION</button>
</div>
</div>
</div>
<!-- Bento Grid Gallery -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Artwork 1 (Spans 2 columns) -->
<div class="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest p-4 hover:shadow-2xl transition-all duration-500">
<div class="aspect-[16/9] overflow-hidden rounded-lg mb-4">
<img alt="Ethereal Horizons" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Impressionist digital landscape with vibrant orange clouds and a solitary figure under a vast sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaCtuTKJIzIYXTsnUa5GJhcKp1ndH43JvalZBQSPb_MQAKSi_5ySKldxs8_Bub5wRB_tYB4sBvMuyBwV_p1Dd07GBZBqBX-QSOW3fIcqZzQNd1YTeJuoDLzd14mNAGaWtIqliPVLYwRXDwsUmRmE9vXxT6o2PesMuchOOxeMGjtafMkOPeI-nJFXrjVHvPAGSQ3YdTMBv4Ite6FWyFAarUysHZYUMPOjcBVyOkged_lnq_A3qctj8XZ9V74bqNy8H8z8qekVFen7g"/>
</div>
<div class="flex justify-between items-center px-2">
<div>
<h3 class="font-headline font-bold text-lg">Ethereal Horizons</h3>
<p class="text-label text-xs text-on-surface-variant">Digital Painting | 2024</p>
</div>
<span class="material-symbols-outlined text-primary" data-icon="arrow_outward">arrow_outward</span>
</div>
</div>
<!-- Artwork 2 -->
<div class="group relative overflow-hidden rounded-xl bg-surface-container-lowest p-4 hover:shadow-2xl transition-all duration-500">
<div class="aspect-[4/5] overflow-hidden rounded-lg mb-4">
<img alt="Persona Study" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Highly detailed digital character portrait with expressive eyes and cinematic lighting in warm tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn_RzmbW5H2F00fcFqoM9hIZ0Vkm88OONteWWUJuVF0J8rW5BzMIgLZM0Caf3fa0f3mPXaGalQsOniIEWxrmk6GtYMSL9_BrChRo5dGix9EwQFmltmuYdz7e4WobOJKfsQ3YKEyH29JOGex2apmJ-qZZvt-g6fy2K5xWJcCIYKL71UiUNOLkaPtmS12nczKrr9EU0-omK08WIEAPeecwiE-3YnfTV3xnGJEE41wz24EfS43W8sBQTxddczmE4AA_kAL5bT5rfa_p0"/>
</div>
<div>
<h3 class="font-headline font-bold text-lg">Persona Study #04</h3>
<p class="text-label text-xs text-on-surface-variant">Illustration</p>
</div>
</div>
<!-- Emotes Panel -->
<div class="group relative overflow-hidden rounded-xl bg-surface-container-lowest p-4 hover:shadow-2xl transition-all duration-500">
<div class="aspect-square grid grid-cols-2 gap-2 mb-4">
<div class="bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
<img alt="Emote 1" class="w-full h-full object-cover" data-alt="Cute stylized character emote showing a happy expression in a vibrant digital art style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1qc-qb3YJNByZq0ZFTlFvY7rF1bmNJrwFb2FnV_i_nBKna6BFhut0C2tADMnecwylb_zHU_AYSO3JZumj9z7fTDRJEr7E82QVZx3f90ZF0yyMr1UzfL8G3BY_K0qscbCbowqsykur3EyJd5sHw9oss0FFQo86AAu2iOPX2QIHiW4IK2YUB0Bj7U8KjAkEAwLPcraNCq-EA7b9f6RqiAa-SG9vCilNN7Qcs2lX-LWrt0XPuRAJcc50ILjS_jWBu016h5H4Jn7wdcY"/>
</div>
<div class="bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
<img alt="Emote 2" class="w-full h-full object-cover" data-alt="Stylized digital art emote showing a surprised expression with bright expressive eyes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmelYRTPrvYguSpEOglT1WvE8LjMRGPg9-QeoDkunPGjZbcRzim7_NMbQFoU6W9u5RN9dzOljm04TCuMR4ooMpTjHo4AgLJQs7PJZ4DO_rdUlA9qw8n_HbxeTBIxwbc8usEyPn1pbJcU0tZZyQOqoAy9ykd2cR8Jnvq7Kg8wOeUvnl9UZWrXmJ-_kDtQkuGVFZgdZxp6kUwL1h5LEAFJf6lBoXZeXp9BcymYKm8lfmOS1YFnUNEckKu7dGeUPC1zaj1JLKdrE0il4"/>
</div>
<div class="bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
<img alt="Emote 3" class="w-full h-full object-cover" data-alt="Pixel art style emote with a cozy warm color palette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBypxuYJ0DI2dDSfUbVGrTo1s6QFZVNPTPFEBrfK7j0Wn3H6h-dQYZ1Fjgd5izpV5E10eDVqsTI0qfY-kjq23Qk12hiQSEbr5OHy-R60vJAtdWo8LX2uFshZM_jA2SFmydi9U0G8cxJJX91N6Tlvv4PBJoWvIV1lgmdlh_6nn_xaXvMagN7rpQwf-6FgwOXshSELpdkZMTRAyk4YdnuFF4ZXkCA1HGVMNs65FNQwjjruawKxMDFeYEPtAyMGPBFHksltL3STUYYvsc"/>
</div>
<div class="bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
<img alt="Emote 4" class="w-full h-full object-cover" data-alt="Vibrant digital icon design for a streaming platform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCpGTchBBZ1WAUo8T0pCw6GIPp1jyMc4NvJK3rzWzElj9aHIoLl8C3dz4BYn7vko3WoSAoDSAPxg5-TCL29nFV5EiZ9zFIg_zEFDXJJojIfueJqjuXWGiyVr5E47afEPmN1e7aovsWaQ87btDCnX4RM6s3Pg_IDiYyNHRwfyB6v_VYRB8FoTSnvYECRcHBbRJXJ7JNyvTXsH90UB8Zl2dJgvKSwMPt205ig7zP_ARX2RLa14ZXRws72E-s_SiADQp7XwRranVxeYE"/>
</div>
</div>
<div>
<h3 class="font-headline font-bold text-lg">Streamer Kit</h3>
<p class="text-label text-xs text-on-surface-variant">Twitch Emotes &amp; Badges</p>
</div>
</div>
<!-- Animation Preview -->
<div class="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest p-4 hover:shadow-2xl transition-all duration-500">
<div class="aspect-[21/9] overflow-hidden rounded-lg mb-4 bg-on-surface/5 flex items-center justify-center relative">
<img alt="Animation Reel" class="w-full h-full object-cover opacity-80" data-alt="Dynamic abstract animation frame with glowing particles and fluid brush strokes in motion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7cnlvH2uqk0Qnn0Agw2-7YrAYR0vtdYzAMYT_rQ9guMzRwcg2o7g2D0hmk9SstjwTtSU77Dp8IX5f7vAeCwrCCyu0ZiyfE_BDP4hvCtI6ZbmAyPDmYTgYunS02PMGwF-Hiz3fET7n5TK8zwYhaiXci0vFCVVDngWSLS7fUEyjZGMU17eE1wdMEeF4B54MbdQ5GALlPKMQMjAstsKlqhXyeiGIOP_mGq4DJz0P35bpe16WVm657o8xFWAJVFRyX7FA3f5TUaI7lsg"/>
<div class="absolute inset-0 flex items-center justify-center">
<div class="w-16 h-16 rounded-full bg-primary/90 text-on-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-4xl" data-icon="play_arrow" data-weight="fill" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
</div>
<div class="flex justify-between items-center px-2">
<div>
<h3 class="font-headline font-bold text-lg">2024 Motion Reel</h3>
<p class="text-label text-xs text-on-surface-variant">2D Animation &amp; FX</p>
</div>
<span class="text-xs font-bold bg-primary-container/20 text-primary px-3 py-1 rounded-full">LATEST WORK</span>
</div>
</div>
</div>
</div>
</section>
<!-- Studio Invite (Contact) -->
<section class="w-full mt-20 bg-primary-container tonal-transition px-8 py-24 md:py-32">
<div class="max-w-4xl mx-auto text-center space-y-12">
<div class="space-y-4">
<h2 class="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-primary-container">STUDIO INVITE</h2>
<p class="text-xl text-on-primary-fixed-variant/80 font-body max-w-2xl mx-auto">
                        Interested in a custom illustration or looking to collaborate on a motion project? Let's bring your vision to life.
                    </p>
</div>
<form class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div class="space-y-2">
<label class="text-headline-sm font-headline font-bold text-on-primary-container px-2">YOUR NAME</label>
<input class="w-full p-4 rounded-xl border-none bg-surface-container-lowest shadow-sm focus:ring-2 focus:ring-primary" placeholder="Lucien Vance" type="text"/>
</div>
<div class="space-y-2">
<label class="text-headline-sm font-headline font-bold text-on-primary-container px-2">EMAIL ADDRESS</label>
<input class="w-full p-4 rounded-xl border-none bg-surface-container-lowest shadow-sm focus:ring-2 focus:ring-primary" placeholder="studio@ethereal.art" type="email"/>
</div>
<div class="md:col-span-2 space-y-2">
<label class="text-headline-sm font-headline font-bold text-on-primary-container px-2">PROJECT VISION</label>
<textarea class="w-full p-4 rounded-xl border-none bg-surface-container-lowest shadow-sm focus:ring-2 focus:ring-primary" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<div class="md:col-span-2 flex justify-center pt-8">
<button class="px-12 py-5 bg-on-primary-container text-surface-container-lowest rounded-full font-extrabold text-lg hover:scale-105 transition-transform shadow-2xl" type="submit">
                            SEND PROPOSAL
                        </button>
</div>
</form>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full bg-orange-500 dark:bg-orange-900 tonal-transition">
<div class="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-7xl mx-auto">
<div class="space-y-4 text-center md:text-left">
<span class="text-2xl font-black text-stone-50 font-headline">ETHEREAL GALLERY</span>
<p class="text-orange-100/80 font-manrope text-sm max-w-xs">Curated digital experiences and motion storytelling based in New York City.</p>
</div>
<div class="flex flex-col items-center md:items-end gap-6">
<div class="flex gap-8">
<a class="text-orange-100/80 hover:text-white transition-opacity font-manrope text-sm" href="#">Privacy Policy</a>
<a class="text-orange-100/80 hover:text-white transition-opacity font-manrope text-sm" href="#">Terms of Service</a>
<a class="text-orange-100/80 hover:text-white transition-opacity font-manrope text-sm underline" href="#">Studio Invite</a>
</div>
<p class="text-stone-50/60 text-xs font-manrope">© 2024 Ethereal Gallery. All Rights Reserved.</p>
</div>
</div>
</footer>
</body></html>

<!-- Commissions & Pricing -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Commissions | THE ETHEREAL GALLERY</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-dim": "#644b2e",
              "error-container": "#f95630",
              "on-surface-variant": "#5b5c5a",
              "surface-container-highest": "#ddddd9",
              "on-secondary-fixed-variant": "#5c5b5b",
              "outline-variant": "#adadab",
              "inverse-surface": "#0d0f0d",
              "on-secondary": "#f4f2f2",
              "secondary-fixed-dim": "#d6d4d4",
              "secondary": "#5c5b5b",
              "surface-tint": "#964300",
              "inverse-on-surface": "#9d9d9a",
              "on-secondary-container": "#525252",
              "on-tertiary-fixed-variant": "#6b5134",
              "error-dim": "#b92902",
              "on-primary-fixed": "#100300",
              "on-error-container": "#520c00",
              "secondary-fixed": "#e4e2e2",
              "surface-variant": "#ddddd9",
              "primary": "#964300",
              "surface-container-high": "#e3e3df",
              "secondary-container": "#e4e2e2",
              "on-secondary-fixed": "#3f3f3f",
              "primary-fixed": "#f9873e",
              "background": "#f7f6f3",
              "surface-container": "#e8e8e5",
              "on-tertiary-fixed": "#4c361b",
              "on-surface": "#2e2f2d",
              "surface-container-low": "#f1f1ee",
              "secondary-dim": "#504f4f",
              "primary-container": "#f9873e",
              "on-tertiary-container": "#60482c",
              "primary-fixed-dim": "#e97b32",
              "surface-container-lowest": "#ffffff",
              "on-primary-fixed-variant": "#542200",
              "error": "#b02500",
              "on-background": "#2e2f2d",
              "surface-dim": "#d4d5d1",
              "tertiary-fixed-dim": "#e9c6a1",
              "on-primary-container": "#451b00",
              "tertiary-fixed": "#f8d4ae",
              "surface-bright": "#f7f6f3",
              "on-primary": "#fff0e9",
              "surface": "#f7f6f3",
              "on-tertiary": "#fff0e3",
              "on-error": "#ffefec",
              "primary-dim": "#843a00",
              "outline": "#767775",
              "tertiary": "#705739",
              "inverse-primary": "#f9873e",
              "tertiary-container": "#f8d4ae"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Manrope"],
              "label": ["Manrope"]
            },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-nav {
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl">
<div class="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
<span class="text-xl font-bold tracking-tighter text-orange-950 dark:text-stone-50 font-headline">THE ETHEREAL GALLERY</span>
<div class="hidden md:flex gap-8 items-center">
<a class="font-headline text-sm uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-orange-500 transition-colors" href="#">Portfolio</a>
<a class="font-headline text-sm uppercase tracking-widest text-orange-600 dark:text-orange-400 font-bold border-b-2 border-orange-500 pb-1" href="#">Commissions</a>
<a class="font-headline text-sm uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-orange-500 transition-colors" href="#">Contact</a>
</div>
<div class="flex items-center gap-4">
<button class="hover:scale-105 transition-transform duration-300">
<span class="material-symbols-outlined text-orange-600 dark:text-orange-400">account_circle</span>
</button>
</div>
</div>
</nav>
<!-- SideNavBar (Social Orbit) -->
<aside class="fixed left-4 top-1/2 -translate-y-1/2 rounded-full py-4 bg-stone-100/50 dark:bg-stone-800/50 backdrop-blur-lg shadow-xl shadow-orange-900/5 flex flex-col items-center gap-4 z-40">
<a class="text-stone-500 dark:text-stone-400 p-3 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all hover:translate-x-1 rounded-full" href="#">
<span class="material-symbols-outlined">live_tv</span>
</a>
<a class="text-stone-500 dark:text-stone-400 p-3 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all hover:translate-x-1 rounded-full" href="#">
<span class="material-symbols-outlined">play_circle</span>
</a>
<a class="text-stone-500 dark:text-stone-400 p-3 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all hover:translate-x-1 rounded-full" href="#">
<span class="material-symbols-outlined">music_note</span>
</a>
<a class="text-stone-500 dark:text-stone-400 p-3 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all hover:translate-x-1 rounded-full" href="#">
<span class="material-symbols-outlined">chat</span>
</a>
</aside>
<main class="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<!-- Hero & Status -->
<header class="mb-20 text-center">
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-primary text-xs font-bold tracking-widest uppercase mb-6">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                Commission Status: Open
            </div>
<h1 class="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-none">
                Bring Your <span class="text-primary italic">Vision</span> to Life
            </h1>
<p class="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-body">
                Custom digital illustrations and smooth-as-silk animations crafted with meticulous care in my ethereal studio.
            </p>
</header>
<!-- Pricing Tiers (Bento Grid) -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
<!-- Illustrations -->
<div class="md:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-none group">
<div class="aspect-[16/9] w-full bg-surface-container overflow-hidden">
<img alt="detailed digital painting of a character in a sun-drenched floral garden with soft cinematic lighting and painterly textures" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="detailed digital painting of a character in a sun-drenched floral garden with soft cinematic lighting and painterly textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZGyOW0GxDymM7KcyF7d1jUjdNIs0qCWsLInwxAJ1iNHPaK8CibasaDkhjQY8ow18vGZ6XeMOkyg0IeeRHqZAHIlRiWgWxWM33BtrgbxS7XpNFyw2D-fDvKM8wX14qk0yil2t-34T88RRMoIGX8eCpV9sr8Ur1Pql0mkzqiM5a9ekpGUsB_v-9gtoAZEzQRhqYPpI1zNprS2rmPoCaHpOyNbpHms-NJnAMXsWlcv4BAYsbKbctZnhPgDUWCh74MUFIJhAC-aJ7-tI"/>
</div>
<div class="p-8">
<div class="flex justify-between items-end mb-4">
<div>
<h3 class="text-2xl font-headline font-bold text-on-surface">Digital Illustrations</h3>
<p class="text-on-surface-variant font-label text-sm">Full body, complex backgrounds, detailed lighting</p>
</div>
<span class="text-3xl font-headline font-black text-primary">from $120</span>
</div>
</div>
</div>
<!-- Emotes -->
<div class="md:col-span-5 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
<div>
<div class="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-primary">mood</span>
</div>
<h3 class="text-2xl font-headline font-bold text-on-surface mb-2">Streaming Emotes</h3>
<p class="text-on-surface-variant mb-6">Optimized for Twitch, Discord, and YouTube. Vector-sharp expressions.</p>
<ul class="space-y-3">
<li class="flex items-center gap-3 text-sm font-label"><span class="material-symbols-outlined text-primary text-lg">check_circle</span> 3 Sizes per Emote</li>
<li class="flex items-center gap-3 text-sm font-label"><span class="material-symbols-outlined text-primary text-lg">check_circle</span> Expressive Character Work</li>
<li class="flex items-center gap-3 text-sm font-label"><span class="material-symbols-outlined text-primary text-lg">check_circle</span> Commercial License</li>
</ul>
</div>
<div class="mt-8">
<span class="text-2xl font-headline font-black text-on-surface">$35 <span class="text-xs font-normal text-on-surface-variant tracking-widest uppercase">per emote</span></span>
</div>
</div>
<!-- Animation Full Row -->
<div class="md:col-span-12 bg-primary-container rounded-xl p-1 md:p-2 flex flex-col md:flex-row gap-8 items-stretch">
<div class="flex-1 p-8 md:p-12 text-on-primary-container">
<h3 class="text-4xl md:text-5xl font-headline font-black mb-4 tracking-tighter">Liquid Animation</h3>
<p class="text-on-primary-container/80 mb-8 max-w-md">Smooth 2D frame-by-frame animation for stream alerts, music videos, or character loops.</p>
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="bg-white/10 backdrop-blur p-4 rounded-lg">
<span class="block text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Animated Loop</span>
<span class="text-xl font-bold">$250+</span>
</div>
<div class="bg-white/10 backdrop-blur p-4 rounded-lg">
<span class="block text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Stream Alerts</span>
<span class="text-xl font-bold">$180+</span>
</div>
</div>
<button class="bg-on-primary-container text-primary-container font-headline font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300">Request Custom Quote</button>
</div>
<div class="flex-1 rounded-lg overflow-hidden min-h-[300px]">
<img alt="vibrant loop of a stylized character walking through a futuristic neon city with fluid motion and glowing trails" class="w-full h-full object-cover" data-alt="vibrant loop of a stylized character walking through a futuristic neon city with fluid motion and glowing trails" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZDHgyC_yQaDDUq992XpunLQ38FxdYkL4U5GqABP26Rwn5Vwq87wwgZBj-njndFlomAAvSZLNOJ3GJLOKoagNvGBeuZcLxQHEVbXOB4oURGbuo5CViGWcdB93-q0rNmqBY_4QflVA3UMZYWPX4Akxflpw9Vlbtw0OMR73w-Q0HgJqfatrg16v98X9jPKD02JI9HF_Rlw32O4LcUySuaYbx6wONNxPpy3mDWOZcG_1EG8fgHHJgSVMF28GyhWJCjoyyrP37hZLTBTc"/>
</div>
</div>
</section>
<!-- Terms of Service Summary -->
<section class="mb-24 px-8 py-12 bg-surface-container-low rounded-xl border-l-4 border-primary">
<h2 class="text-3xl font-headline font-bold text-on-surface mb-8">The Studio Rules (ToS)</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<h4 class="font-headline font-bold text-primary mb-3">01. Usage</h4>
<p class="text-sm text-on-surface-variant">Personal use only unless commercial fee is paid. I retain the right to showcase the work in my portfolio.</p>
</div>
<div>
<h4 class="font-headline font-bold text-primary mb-3">02. Revisions</h4>
<p class="text-sm text-on-surface-variant">Two major revision cycles at the sketch stage. Minor tweaks to color are free once completed.</p>
</div>
<div>
<h4 class="font-headline font-bold text-primary mb-3">03. Timeline</h4>
<p class="text-sm text-on-surface-variant">Standard turnaround is 2-4 weeks depending on complexity. Rush orders available for a 50% surcharge.</p>
</div>
</div>
</section>
<!-- Commission Form (Studio Invite) -->
<section class="bg-primary-container rounded-3xl p-8 md:p-16 text-on-primary-container relative overflow-hidden" id="request-form">
<div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 class="text-5xl font-headline font-black mb-6 leading-none">Ready to <br/>Collaborate?</h2>
<p class="text-on-primary-container/90 mb-8 text-lg">Tell me about your project. I respond to all serious inquiries within 48 hours.</p>
<div class="flex flex-col gap-4">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-primary-container">mail</span>
<span class="font-bold">commissions@ethereal.gallery</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-on-primary-container">verified</span>
<span class="font-bold">Official Artist Stripe Verified</span>
</div>
</div>
</div>
<form class="space-y-6">
<div class="space-y-2">
<label class="block text-sm font-headline font-bold uppercase tracking-widest">Full Name</label>
<input class="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-on-primary-container/20 transition-shadow" placeholder="Your name" type="text"/>
</div>
<div class="space-y-2">
<label class="block text-sm font-headline font-bold uppercase tracking-widest">Email Address</label>
<input class="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-on-primary-container/20 transition-shadow" placeholder="hello@example.com" type="email"/>
</div>
<div class="space-y-2">
<label class="block text-sm font-headline font-bold uppercase tracking-widest">Commission Type</label>
<select class="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-on-primary-container/20 transition-shadow">
<option>Full Illustration</option>
<option>Emote Pack (3-6)</option>
<option>Animation Loop</option>
<option>Other / Custom</option>
</select>
</div>
<div class="space-y-2">
<label class="block text-sm font-headline font-bold uppercase tracking-widest">Description</label>
<textarea class="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-on-primary-container/20 transition-shadow" placeholder="Briefly describe your character, setting, and mood..." rows="4"></textarea>
</div>
<button class="w-full bg-on-primary-container text-white font-headline font-bold py-5 rounded-full hover:scale-[1.02] transition-transform shadow-lg" type="submit">Send Request</button>
</form>
</div>
<!-- Background Decorative Element -->
<div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-20 bg-orange-500 dark:bg-orange-900 text-stone-50">
<div class="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-7xl mx-auto">
<div class="flex flex-col gap-2">
<span class="text-2xl font-black text-stone-50 font-headline uppercase tracking-tight">Ethereal Gallery</span>
<p class="font-manrope text-sm opacity-80">Curation in every pixel.</p>
</div>
<div class="flex gap-8 items-center font-manrope text-sm">
<a class="text-orange-100/80 hover:text-white transition-opacity" href="#">Privacy Policy</a>
<a class="text-orange-100/80 hover:text-white transition-opacity" href="#">Terms of Service</a>
<a class="text-white underline font-bold" href="#">Studio Invite</a>
</div>
<div class="text-center md:text-right">
<p class="font-manrope text-sm opacity-80">© 2024 Ethereal Gallery. All Rights Reserved.</p>
</div>
</div>
</footer>
</body></html>