export function filterProjectsByCategory(projects, category) {
    if (category === "all") {
        return projects;
    }

    return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(projects) {
    return projects.filter((project) => project.featured);
}