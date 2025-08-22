"use server";

import { StayInTouchForm } from "@/components/get-in-touch/get-in-touch";
import { prisma } from "@/lib/prisma";

export const createGetInTouch = async (formData: StayInTouchForm) => {
  const { name, phone, email, onlinePresence, contactMethod, message } =
    formData;

  const getInTouch = await prisma.company_get_in_touch_table.create({
    data: {
      company_get_in_touch_name: name,
      company_get_in_touch_phone: phone,
      company_get_in_touch_email: email,
      company_get_in_touch_online_presence: onlinePresence,
      company_get_in_touch_contact_method: contactMethod,
      company_get_in_touch_message: message,
    },
  });

  return getInTouch;
};
