import type { Project } from './types'

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Website redesign',
    status: 'Active',
    taskCount: 24,
    createdAt: new Date('2026-03-01'),
  },
  {
    id: '2',
    name: 'Mobile app v2',
    status: 'Active',
    taskCount: 18,
    createdAt: new Date('2026-02-15'),
  },
  {
    id: '3',
    name: 'API refactor',
    status: 'Planning',
    taskCount: 5,
    createdAt: new Date('2026-04-01'),
  },
  {
    id: '4',
    name: 'Q1 marketing site',
    status: 'Archived',
    taskCount: 31,
    createdAt: new Date('2025-12-10'),
  },
  {
    id: '5',
    name: 'Internal docs portal',
    status: 'Active',
    taskCount: 12,
    createdAt: new Date('2026-03-22'),
  },
  {
    id: '6',
    name: 'Onboarding flow redesign',
    status: 'Planning',
    taskCount: 7,
    createdAt: new Date('2026-04-10'),
  },
]
