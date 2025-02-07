"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function UnsubscribePage() {
  const t = useTranslations("unsubscribePage");
  const [message, setMessage] = useState(t("processing"));
  const [showResubscribe, setShowResubscribe] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      setMessage(t("invalidRequest"));
      return;
    }

    fetch("/api/subscribe", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setMessage(t("failedUnsubscribe"));
        } else {
          setMessage(t("unsubscribed"));
          setShowResubscribe(true);
        }
      })
      .catch(() => setMessage(t("somethingWentWrong")));
  }, [email, t]);

  const handleResubscribe = async () => {
    setMessage(t("reSubscribing"));
    setShowResubscribe(false);

    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message || t("resubscriptionFailed"));
      })
      .catch(() => setMessage(t("failedResubscribe")));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold">{message}</h2>
      {showResubscribe && (
        <button
          onClick={handleResubscribe}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          {t("reSubscribeButton")}
        </button>
      )}
    </div>
  );
}
