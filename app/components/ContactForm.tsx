"use client";


import { useState } from "react";


export default function ContactForm({ email }: { email: string }) {
    const [state, setState] = useState<{ sending: boolean; ok?: boolean; error?: string }>({ sending: false });


    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") || "");
        const from = String(fd.get("email") || "");
        const message = String(fd.get("message") || "");


// Fallback: open mailto if no backend configured
        const mailto = `mailto:${email}?subject=${encodeURIComponent("Portfolio contact from " + name)}&body=${encodeURIComponent(message + "\n\nFrom: " + from)}`;
        window.location.href = mailto;
        setState({ sending: false, ok: true });
    }


    return (
        <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
            <input name="name" required placeholder="Your name" className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2" />
            <input name="email" type="email" required placeholder="Your email" className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2" />
            <textarea name="message" required rows={5} placeholder="Message" className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2" />
            <button disabled={state.sending} className="inline-flex justify-center rounded-lg bg-brand-600 text-white px-5 py-2.5 font-medium hover:bg-brand-700 disabled:opacity-60">
                {state.sending ? "Sending..." : "Send message"}
            </button>
            {state.ok && <p className="text-sm text-green-600">Thanks! Your mail client should open now.</p>}
            {state.error && <p className="text-sm text-red-600">{state.error}</p>}
        </form>
    );
}