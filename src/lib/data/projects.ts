import 'server-only'

import { mockProjects } from '../mock-data'
import type { Project } from '../types'

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getProjects() {
  await delay(1000)
  return mockProjects
}

export async function getProjectById(id: string): Promise<Project | null> {
  await delay(200)
  return mockProjects.find((project) => project.id === id) || null
}
