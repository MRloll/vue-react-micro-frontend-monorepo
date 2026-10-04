<template>
  <div
    aria-label="Learnly dashboard preview"
    class="relative h-[420px] w-[620px] shrink-0 basis-[620px] rotate-[-2deg] rounded-[28px] bg-learnly-peach shadow-[0_18px_30px] shadow-learnly-brand/25 max-[900px]:mx-auto max-[900px]:mt-12 max-[900px]:mb-[-74px] max-[900px]:max-w-full max-[900px]:origin-top-left max-[900px]:scale-[0.82] max-[540px]:mb-[-170px] max-[540px]:scale-[0.58]"
  >
    <div
      class="absolute -top-10 right-2.5 size-[260px] rounded-full bg-learnly-brand-glow/33"
    ></div>
    <div
      class="absolute top-[58px] left-[116px] flex h-[278px] w-[450px] rotate-[8deg] items-start gap-[22px] rounded-2xl bg-learnly-navy p-[18px] text-learnly-surface shadow-[0_18px_26px] shadow-learnly-navy/25"
    >
      <span class="text-[11px] font-extrabold text-learnly-on-dark"
        >YOUR LEARNING OS</span
      >
      <strong class="text-[38px] leading-[0.8]">18.5 h</strong>
      <span class="text-[12px] text-learnly-muted-on-dark"
        >of focused learning this month</span
      >
    </div>
    <div
      class="absolute top-[86px] left-[70px] h-[284px] w-[460px] rotate-[-7deg] rounded-2xl bg-learnly-surface p-[22px] text-learnly-navy shadow-[0_18px_26px] shadow-learnly-navy/25"
    >
      <div class="flex items-center gap-3.5">
        <strong class="text-[16px]">Good morning, Jordan</strong>
        <span class="text-[11px] text-learnly-muted"
          >Your next small win is waiting.</span
        >
      </div>
      <div class="mt-7 flex gap-3">
        <div
          class="flex h-[118px] w-[190px] flex-col gap-[9px] rounded-xl bg-learnly-cream p-3.5"
        >
          <span class="text-[9px] font-extrabold tracking-[0.5px]"
            >COURSE PROGRESS</span
          >
          <strong class="text-[26px]">68%</strong>
          <div
            role="progressbar"
            aria-label="Design systems course progress"
            :aria-valuenow="68"
            :aria-valuemin="0"
            :aria-valuemax="100"
            class="h-1.5 shrink-0 overflow-hidden rounded-[10px] bg-learnly-peach"
          >
            <div class="h-full w-[68%] bg-learnly-brand"></div>
          </div>
          <small class="text-[10px] text-learnly-muted">Design systems</small>
        </div>
        <div
          class="flex h-[118px] w-[190px] flex-col gap-[9px] rounded-xl bg-learnly-navy p-3.5 text-learnly-surface"
        >
          <span class="text-[9px] font-extrabold tracking-[0.5px]"
            >YOUR STREAK</span
          >
          <strong class="text-[26px]">12 days</strong>
          <small class="text-[10px] text-learnly-on-dark"
            >Keep the rhythm going</small
          >
        </div>
      </div>
      <span
        class="absolute top-[26px] right-[-70px] text-[12px] font-extrabold text-learnly-brand"
        >+ 1 new skill</span
      >
    </div>
  </div>
</template>
