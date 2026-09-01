"use client";

import { useState } from "react";

const PhoneIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
      stroke="#1d6aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WaIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function MobileCTABar() {
  const [callOpen, setCallOpen] = useState(false);
  const [waOpen, setWaOpen] = useState(false);

  return (
    <>
      {/* Arama paneli */}
      {callOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end bg-black/30" onClick={() => setCallOpen(false)}>
          <div className="w-full bg-white rounded-t-2xl shadow-2xl border-t border-[#dde3ec] p-5 pb-8" onClick={(e) => e.stopPropagation()}>
            <div className="w-10 h-1 rounded-full bg-[#dde3ec] mx-auto mb-5" />
            <p className="text-xs font-semibold text-[#8898aa] uppercase tracking-widest mb-4 text-center">
              Hangi numarayı aramak istersiniz?
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:05075866063" className="flex items-center gap-3 p-4 rounded-xl bg-[#f7f8fa] border border-[#eef0f4] active:bg-[#e8f0fe]" onClick={() => setCallOpen(false)}>
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e8f0fe] flex-shrink-0"><PhoneIcon /></div>
                <div>
                  <p className="text-base font-extrabold text-[#0f1f3d]">0507 586 60 63</p>
                  <p className="text-xs text-[#5a6a85]">Hat 1</p>
                </div>
              </a>
              <a href="tel:05369322422" className="flex items-center gap-3 p-4 rounded-xl bg-[#f7f8fa] border border-[#eef0f4] active:bg-[#e8f0fe]" onClick={() => setCallOpen(false)}>
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e8f0fe] flex-shrink-0"><PhoneIcon /></div>
                <div>
                  <p className="text-base font-extrabold text-[#0f1f3d]">0536 932 24 22</p>
                  <p className="text-xs text-[#5a6a85]">Hat 2</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp paneli */}
      {waOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end bg-black/30" onClick={() => setWaOpen(false)}>
          <div className="w-full bg-white rounded-t-2xl shadow-2xl border-t border-[#dde3ec] p-5 pb-8" onClick={(e) => e.stopPropagation()}>
            <div className="w-10 h-1 rounded-full bg-[#dde3ec] mx-auto mb-5" />
            <p className="text-xs font-semibold text-[#8898aa] uppercase tracking-widest mb-4 text-center">
              Hangi numara ile WhatsApp?
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/905075866063" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-[#f7f8fa] border border-[#eef0f4] active:bg-[#f0fdf4]" onClick={() => setWaOpen(false)}>
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e8f0fe] flex-shrink-0"><WaIcon /></div>
                <div>
                  <p className="text-base font-extrabold text-[#0f1f3d]">0507 586 60 63</p>
                  <p className="text-xs text-[#5a6a85]">Hat 1</p>
                </div>
              </a>
              <a href="https://wa.me/905369322422" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-[#f7f8fa] border border-[#eef0f4] active:bg-[#f0fdf4]" onClick={() => setWaOpen(false)}>
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e8f0fe] flex-shrink-0"><WaIcon /></div>
                <div>
                  <p className="text-base font-extrabold text-[#0f1f3d]">0536 932 24 22</p>
                  <p className="text-xs text-[#5a6a85]">Hat 2</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Alt çubuk */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#dde3ec]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Hızlı iletişim çubuğu"
      >
        <div className="flex items-stretch h-14">
          <button onClick={() => { setCallOpen(true); setWaOpen(false); }}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 hover:bg-[#f7f8fa] active:bg-[#eef0f4] transition-colors"
            aria-label="Ara">
            <PhoneIcon />
            <span className="text-[10px] font-semibold text-[#1d6aff]">ARA</span>
          </button>
          <div className="w-px bg-[#dde3ec]" aria-hidden="true" />
          <button onClick={() => { setWaOpen(true); setCallOpen(false); }}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 hover:bg-[#f7f8fa] active:bg-[#eef0f4] transition-colors"
            aria-label="WhatsApp">
            <WaIcon />
            <span className="text-[10px] font-semibold text-[#25D366]">WHATSAPP</span>
          </button>
        </div>
      </div>
    </>
  );
}
