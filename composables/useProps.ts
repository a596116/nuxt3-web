export const useProps = () => {
    const mapPageUrl = (pageId: String) => {
        return `/posts/${pageId}`
    }

    const pageLinkOptions = computed(() => ({
        component: defineNuxtLink({}),
        href: "to",
    }))

    return {
        mapPageUrl,
        pageLinkOptions,
    }
}