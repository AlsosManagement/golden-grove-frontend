import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const asamLevel = z.enum(['0.5', '1', '2.1', '2.5', '3.1', '3.3', '3.5', '3.7', '4']);

const facility = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/facility' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    status: z.enum(['open', 'opening_soon', 'planning']),
    openingNote: z.string().optional(),
    city: z.string(),
    state: z.string(),
    stateCode: z.string().length(2),
    address: z.object({
      street: z.string(),
      city: z.string(),
      state: z.string().length(2),
      postalCode: z.string(),
      country: z.string().default('US'),
    }),
    geo: z.object({ lat: z.number(), lng: z.number() }),
    phone: z.string(),
    phoneTel: z.string().regex(/^\+\d+$/),
    email: z.string().email(),
    hoursNote: z.string().default('24/7 Admissions'),
    parent: z.object({ name: z.string(), url: z.string().url() }),
    medicalDirectors: z.array(z.object({
      name: z.string(),
      credentials: z.array(z.string()).default([]),
      role: z.string().default('Medical Director'),
      bio: z.string().optional(),
    })),
    accreditations: z.array(z.object({
      name: z.string(),
      abbreviation: z.string().optional(),
      url: z.string().url().optional(),
      licenseNumber: z.string().optional(),
    })).default([]),
    insurance: z.object({
      medicaidStatus: z.enum(['in_network', 'pending_contract', 'opening_soon']),
      expectedMedicaidPlans: z.array(z.string()),
      commercialCarriers: z.array(z.string()),
      disclaimerPreOpening: z.string(),
      disclaimerMedicaid: z.string(),
    }),
    mapEmbedUrl: z.string().url().optional(),
  }),
});

const mcos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/mcos' }),
  schema: z.object({
    name: z.string(),
    shortName: z.string(),
    slug: z.string(),
    stateCode: z.string().length(2),
    programType: z.enum(['medicaid', 'medicare', 'commercial', 'marketplace']),
    parentPlan: z.string().optional(),
    url: z.string().url().optional(),
    memberServicesPhone: z.string().optional(),
    logo: z.string().optional(),
    description: z.string(),
    coverageHighlights: z.array(z.string()),
    priorAuthNotes: z.string().optional(),
    levelsOfCareCovered: z.array(asamLevel),
    matCovered: z.array(z.enum(['suboxone', 'subutex', 'methadone', 'vivitrol', 'naltrexone', 'acamprosate', 'disulfiram'])),
    memberBenefitsNote: z.string().optional(),
    contractStatus: z.enum(['in_network', 'pending', 'accepted_oon', 'not_accepted']).default('pending'),
  }),
});

const substances = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/substances' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.enum(['alcohol', 'opioids', 'stimulants', 'benzodiazepines', 'cannabis', 'polysubstance', 'kratom-synthetics']),
    parent: z.string().optional(),
    synonyms: z.array(z.string()).default([]),
    icd10: z.array(z.string()).default([]),
    dsm5Name: z.string().optional(),
    overview: z.string(),
    signs: z.array(z.string()).default([]),
    withdrawalTimeline: z.array(z.object({
      window: z.string(),
      symptoms: z.array(z.string()),
    })).default([]),
    treatmentApproach: z.array(z.object({
      title: z.string(),
      detail: z.string(),
      linksTo: z.array(z.string()).optional(),
    })).default([]),
    localContext: z.string().optional(),
    medicaidCoverageSummary: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

const levelsOfCare = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/levels-of-care' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    asamCode: asamLevel,
    shortName: z.string(),
    typicalDuration: z.string(),
    hoursPerWeek: z.string().optional(),
    description: z.string(),
    whoBenefits: z.array(z.string()).default([]),
    typicalDay: z.string().optional(),
    medicaidCoverageSummary: z.string().optional(),
    imdExclusionNote: z.string().optional(),
  }),
});

const therapies = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/therapies' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    abbreviation: z.string().optional(),
    category: z.enum(['psychotherapy', 'somatic-trauma', 'holistic', 'recovery-models', 'family-systems']),
    evidenceLevel: z.enum(['strong', 'moderate', 'emerging']).default('moderate'),
    description: z.string(),
    bestFor: z.array(z.string()).default([]),
  }),
});

const mentalHealth = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/mental-health' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    dsm5Code: z.string().optional(),
    coOccurringWithSudNote: z.string(),
    selfMedicationSigns: z.array(z.string()).default([]),
    integratedTreatmentApproach: z.string(),
    recommendedTherapies: z.array(z.string()).default([]),
    medicaidCoverageSummary: z.string().optional(),
  }),
});

const audiences = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/audiences' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    pageTitlePattern: z.string(),
    medicaidRelevance: z.enum(['high', 'moderate', 'standard']).default('standard'),
    specializedNeeds: z.array(z.string()).default([]),
    clinicalConsiderations: z.string().optional(),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/locations' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    type: z.enum(['city', 'neighborhood', 'region']),
    stateCode: z.string().length(2),
    distanceFromFacility: z.string().optional(),
    transitNote: z.string().optional(),
    geo: z.object({ lat: z.number(), lng: z.number() }).optional(),
    localContext: z.string().optional(),
  }),
});

export const collections = {
  facility,
  mcos,
  substances,
  levelsOfCare,
  therapies,
  mentalHealth,
  audiences,
  locations,
};
