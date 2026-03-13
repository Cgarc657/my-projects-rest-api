const seededAt = new Date().toISOString()

let projects = [
  {
    id: 1,
    name: 'Residential Electrical Rewiring',
    description:
      'Replace old electrical wires in a house to make the power system safer and more reliable.',
    created_at: seededAt,
    updated_at: seededAt,
  },
  {
    id: 2,
    name: 'Kitchen Renovation',
    description:
      'Update a kitchen by adding new cabinets, counters, and basic improvements.',
    created_at: seededAt,
    updated_at: seededAt,
  },
  {
    id: 3,
    name: 'Bathroom Plumbing Installation',
    description: 'Add new water pipes and drains for a bathroom.',
    created_at: seededAt,
    updated_at: seededAt,
  },
  {
    id: 4,
    name: 'Custom Deck Carpentry',
    description:
      'Build a wooden deck in the backyard with steps and a railing.',
    created_at: seededAt,
    updated_at: seededAt,
  },
]

let nextProjectId = 5

function clone(item) {
  return { ...item }
}

function nowIso() {
  return new Date().toISOString()
}

export function listProjects() {
  return projects.map(clone)
}

export function getProjectById(id) {
  const project = projects.find((item) => item.id === id)
  return project ? clone(project) : null
}

export function createProject(input) {
  const timestamp = nowIso()
  const project = {
    id: nextProjectId,
    name: input.name.trim(),
    description: input.description?.trim() || '',
    created_at: timestamp,
    updated_at: timestamp,
  }

  nextProjectId += 1
  projects.push(project)

  return clone(project)
}

export function updateProject(id, input) {
  const index = projects.findIndex((item) => item.id === id)

  if (index === -1) {
    return null
  }

  const current = projects[index]
  const updated = {
    ...current,
    ...('name' in input ? { name: input.name.trim() } : {}),
    ...('description' in input
      ? { description: input.description.trim() }
      : {}),
    updated_at: nowIso(),
  }

  projects[index] = updated
  return clone(updated)
}

export function deleteProject(id) {
  const startSize = projects.length
  projects = projects.filter((item) => item.id !== id)

  if (projects.length === startSize) {
    return false
  }

  return true
}
