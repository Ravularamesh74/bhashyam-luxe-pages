import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { LayoutDashboard, PlusCircle, Image as ImageIcon, Loader2 } from "lucide-react";

/**
 * Admin Panel for Bhashyam Developers
 * Allows adding new projects directly to Firebase Firestore
 */
const Admin = () => {
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [form, setForm] = useState({
        name: "",
        location: "",
        status: "available",
        desc: "",
        featured: false,
    });

    // Password Protection Check
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "bhashyam123") {
            setIsAuthenticated(true);
        } else {
            toast.error("Incorrect Password");
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = "";

            // 1. Upload Image to Firebase Storage if exists
            if (imageFile) {
                const fileRef = ref(storage, `projects/${Date.now()}_${imageFile.name}`);
                const uploadResult = await uploadBytes(fileRef, imageFile);
                imageUrl = await getDownloadURL(uploadResult.ref);
            }

            // 2. Add Project to Firestore
            await addDoc(collection(db, "projects"), {
                ...form,
                image: imageUrl,
                createdAt: serverTimestamp(),
            });

            toast.success("Project published successfully!");
            setForm({ name: "", location: "", status: "available", desc: "", featured: false });
            setImageFile(null);
        } catch (error: any) {
            console.error(error);
            toast.error("Failed to add project. Please check Firebase config.");
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex min-h-[80vh] items-center justify-center bg-background px-4">
                <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl">
                    <div className="mb-6 flex flex-col items-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                            <LayoutDashboard size={24} />
                        </div>
                        <h1 className="text-2xl font-bold font-display text-foreground">Admin Login</h1>
                        <p className="text-sm text-muted-foreground text-center">
                            Please enter the administrator password to manage projects.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <Input
                            type="password"
                            placeholder="Enter Admin Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-muted/50"
                            required
                        />
                        <Button type="submit" className="w-full bg-gold text-primary hover:bg-gold-light mt-2">
                            Access Dashboard
                        </Button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-border">
                <PlusCircle className="text-gold h-8 w-8" />
                <h1 className="font-display text-3xl font-bold text-foreground">Add New Project</h1>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 shadow-xl relative overflow-hidden">
                {/* Decorative Gradient */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-gold/5 blur-[80px]" />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Project Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-muted-foreground ml-1">Project Name</label>
                            <Input
                                placeholder="e.g. Royal County"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                                className="bg-muted/30"
                            />
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-muted-foreground ml-1">Location</label>
                            <Input
                                placeholder="e.g. Nandigama, Hyderabad"
                                value={form.location}
                                onChange={(e) => setForm({ ...form, location: e.target.value })}
                                required
                                className="bg-muted/30"
                            />
                        </div>
                    </div>

                    {/* Status Select */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-muted-foreground ml-1">Current Status</label>
                        <select
                            value={form.status}
                            onChange={(e) => setForm({ ...form, status: e.target.value })}
                            className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-muted/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground outline-none transition disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="available">Available / New Launch</option>
                            <option value="sold">Sold Out</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-muted-foreground ml-1">Project Highlights</label>
                        <Textarea
                            placeholder="Enter unique selling points or details..."
                            value={form.desc}
                            onChange={(e) => setForm({ ...form, desc: e.target.value })}
                            className="bg-muted/30 min-h-[120px]"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-muted-foreground ml-1">Project Image</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/20 hover:bg-muted/40 transition">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <ImageIcon className="w-8 h-8 text-gold-dark mb-2" />
                                    <p className="mb-1 text-sm text-foreground/80 font-medium">
                                        {imageFile ? imageFile.name : "Click to upload image"}
                                    </p>
                                    <p className="text-xs text-muted-foreground">PNG, JPG or JPEG (Max 5MB)</p>
                                </div>
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                            </label>
                        </div>
                    </div>

                    {/* Featured Toggle */}
                    <div className="flex items-center gap-3 py-2">
                        <input
                            type="checkbox"
                            id="featured"
                            checked={form.featured}
                            onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                            className="w-5 h-5 accent-gold cursor-pointer"
                        />
                        <label htmlFor="featured" className="text-sm text-foreground cursor-pointer font-medium">
                            Mark as Featured Project (Show on Homepage)
                        </label>
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        className="w-full bg-gold text-primary hover:bg-gold-light font-bold text-base py-7 shadow-lg shadow-gold/20"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Uploading & Publishing...
                            </>
                        ) : (
                            "Add Project to Website"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
