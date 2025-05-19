import { productSchema } from "@/formSchema";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms";

export const load = async () => {
	const form = await superValidate(zod(productSchema));
	return { form };
};
