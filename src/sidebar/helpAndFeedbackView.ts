/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { ExtensionContext, l10n } from "vscode";
import { HelpAndFeedbackView, Link, StandardLinksProvider, ProvideFeedbackLink, Command } from "vscode-ext-help-and-feedback-view";

export function registerHelpAndFeedbackView(context: ExtensionContext) {
    const items = new Array<Link | Command>();
    const predefinedProvider = new StandardLinksProvider('maotou316.project-manager-maotou');
    items.push({ ...predefinedProvider.getGetStartedLink(), title: l10n.t("Get Started") });
    items.push({ ...new ProvideFeedbackLink('project-manager'), title: l10n.t("Provide Feedback") });
    items.push({ ...predefinedProvider.getReviewIssuesLink(), title: l10n.t("Review Issues") });
    items.push({ ...predefinedProvider.getReportIssueLink(), title: l10n.t("Report Issue") });
    items.push({
        icon: 'heart',
        title: l10n.t("Support"),
        command: 'projectManager.supportProjectManager'
    });
    new HelpAndFeedbackView(context, "projectManagerHelpAndFeedback", items);
}