/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
}
