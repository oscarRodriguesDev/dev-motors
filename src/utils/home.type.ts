export interface HomeProps {
    object: {
        slug: string;
        title: string;
        metadata: {
            banner: ImageProps;
            heading: string;
            cta_button: CTAButtonProps;
            about: AboutProps;
            services: ServiceProps[];
            contact: ContactProps;
        }
    }
}

interface ImageProps {
    url: string;
    imgix_url: string;
}

interface CTAButtonProps {
    title: string;
    url: string;
}

interface AboutProps {
    description: string;
    banner: ImageProps;
}

interface ServiceProps {
    image: ImageProps;
    description: string;
}

interface ContactProps {
    email: string;
    phone: string;
    adress: string;
    time: string;
}
