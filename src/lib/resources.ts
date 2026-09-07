import { getCollection, type CollectionEntry } from 'astro:content';

export const resourceTypes = ['skills', 'prompts', 'workflows', 'taste'] as const;
export type ResourceType = (typeof resourceTypes)[number];
export type ResourceEntry = CollectionEntry<ResourceType>;

export const typeMeta = {
  skills: { label: 'Skills', singular: 'Skill', mark: 'S', description: '可复用的能力包与执行规范' },
  prompts: { label: 'Prompts', singular: 'Prompt', mark: 'P', description: '经过打磨、可直接使用的提示词' },
  workflows: { label: '工作流', singular: '工作流', mark: 'W', description: '从输入到交付的完整行动路径' },
  taste: { label: 'Taste', singular: 'Taste', mark: 'T', description: '值得收藏的审美参考与判断' },
} as const;

export async function getAllResources() {
  const groups = await Promise.all(
    resourceTypes.map(async (type) => {
      const entries = await getCollection(type);
      return entries.map((entry) => ({ ...entry, type }));
    }),
  );

  return groups
    .flat()
    .sort((a, b) => b.data.updatedAt.getTime() - a.data.updatedAt.getTime());
}

export function resourceHref(type: ResourceType, id: string) {
  return `/${type}/${id.replace(/\.(md|mdx)$/, '')}`;
}
